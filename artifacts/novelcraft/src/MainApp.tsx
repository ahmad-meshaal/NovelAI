import React, { useState, useRef, useEffect } from "react";
import {
  FileText,
  Download,
  Sparkles,
  AlignLeft,
  AlignCenter,
  AlignRight,
  AlignJustify,
  Bold,
  Italic,
  Loader2,
  Plus,
  Lock,
  Unlock,
  Menu,
  X,
  Globe,
  Settings2,
} from "lucide-react";

function cn(...classes: (string | boolean | undefined | null)[]) {
  return classes.filter(Boolean).join(" ");
}

const FONTS = [
  { value: '"Amiri", serif', label: "Amiri (Arabic)" },
  { value: "Inter, sans-serif", label: "Sans" },
  { value: "Georgia, serif", label: "Classic Serif" },
  { value: '"Noto Sans Arabic", sans-serif', label: "Noto Arabic" },
  { value: "monospace", label: "Mono" },
];

const FONT_SIZES = [12, 14, 16, 18, 20, 24, 28, 32];

export default function MainApp() {
  const [input, setInput] = useState("");
  const [content, setContent] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [fontSize, setFontSize] = useState(18);
  const [fontFamily, setFontFamily] = useState(FONTS[0].value);
  const [alignment, setAlignment] = useState<"left" | "center" | "right" | "justify">("right");
  const [isBold, setIsBold] = useState(false);
  const [isItalic, setIsItalic] = useState(false);
  const [isEditable, setIsEditable] = useState(true);
  const [language, setLanguage] = useState<"ar" | "en">("ar");
  const [lineHeight, setLineHeight] = useState(1.8);
  const [progress, setProgress] = useState(0);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const editorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    if (isGenerating) {
      setProgress(0);
      interval = setInterval(() => {
        setProgress((prev) => {
          if (prev < 20) return prev + 0.8;
          if (prev < 85) return prev + 0.15;
          if (prev < 98) return prev + 0.05;
          return prev;
        });
      }, 500);
    } else {
      setProgress(100);
      const t = setTimeout(() => setProgress(0), 500);
      return () => clearTimeout(t);
    }
    return () => clearInterval(interval);
  }, [isGenerating]);

  useEffect(() => {
    const checkMobile = () => {
      if (window.innerWidth < 768) setIsSidebarOpen(false);
      else setIsSidebarOpen(true);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleGenerate = async () => {
    if (!input.trim()) return;
    setIsGenerating(true);
    if (window.innerWidth < 768) setIsSidebarOpen(false);
    setContent("");

    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: input, language }),
      });

      if (!response.ok) throw new Error(`Server error ${response.status}`);

      const reader = response.body?.getReader();
      if (!reader) throw new Error("No reader");

      const decoder = new TextDecoder();
      let full = "";
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        full += decoder.decode(value, { stream: true });
        setContent(full);
      }
    } catch {
      alert(language === "ar" ? "حدث خطأ أثناء التوليد" : "Error generating content");
    } finally {
      setIsGenerating(false);
    }
  };

  const handleDirectFormat = () => {
    if (!input.trim()) return;
    const lines = input.split("\n").filter((l) => l.trim());
    if (!lines.length) return;
    const chapterRegex =
      /^(الفصل|البارت|فصل|القسم|الجزء|Chapter|Part|Section|Ch\.|Pt\.)\s*((\d+)|([\u0621-\u064A]+))/i;
    let html = `<h1>${lines[0]}</h1>`;
    for (let i = 1; i < lines.length; i++) {
      const line = lines[i].trim();
      if (chapterRegex.test(line) || (line.length < 40 && line.length > 0)) {
        html += `<h2>${line}</h2>`;
      } else {
        html += `<p>${line}</p>`;
      }
    }
    setContent(html);
    if (window.innerWidth < 768) setIsSidebarOpen(false);
  };

  const handleExportPDF = async () => {
    if (!editorRef.current || !content) return;
    setIsGenerating(true);
    try {
      const html2pdf = (await import("html2pdf.js")).default;
      const opt = {
        margin: [20, 20, 25, 20] as [number, number, number, number],
        filename: "novel.pdf",
        image: { type: "jpeg" as const, quality: 1 },
        html2canvas: { scale: 1.5, useCORS: true, backgroundColor: "#ffffff" },
        jsPDF: { unit: "mm", format: "a4", orientation: "portrait" as const },
        pagebreak: { mode: ["avoid-all", "css", "legacy"] },
      };
      await html2pdf().set(opt).from(editorRef.current).save();
    } catch {
      alert(language === "ar" ? "حدث خطأ أثناء تصدير PDF" : "PDF Export failed");
    } finally {
      setIsGenerating(false);
    }
  };

  const handleExportHTML = () => {
    if (!content) return;
    const htmlContent = `<!DOCTYPE html>
<html lang="${language}" dir="${language === "ar" ? "rtl" : "ltr"}">
<head>
  <meta charset="UTF-8">
  <title>${language === "ar" ? "روايتي" : "My Novel"}</title>
  <link href="https://fonts.googleapis.com/css2?family=Amiri:wght@400;700&display=swap" rel="stylesheet">
  <style>
    body { font-family: 'Amiri', serif; background: #FDFCFB; color: #1a1a1a; line-height: ${lineHeight}; margin: 0; }
    .container { max-width: 800px; margin: 0 auto; padding: 80px 24px; }
    h1 { text-align: center; font-size: 3rem; border-bottom: 2px solid #eaeaea; padding-bottom: 0.5em; margin-bottom: 2em; }
    h2 { text-align: center; color: #c2410c; margin-top: 4em; font-size: 2rem; }
    p { margin-bottom: 2em; text-indent: 2em; text-align: justify; font-size: ${fontSize}px; }
  </style>
</head>
<body><div class="container">${content}</div></body>
</html>`;
    const blob = new Blob([htmlContent], { type: "text/html" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "novel.html";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-[#FDFCFB] text-[#1a1a1a] flex flex-col selection:bg-orange-100">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Amiri:ital,wght@0,400;0,700;1,400;1,700&family=Noto+Sans+Arabic:wght@400;700&family=Inter:wght@300;400;600;700&display=swap');
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        div[contenteditable] h1 {
          font-size: 2.2em; border-bottom: 2px solid #eaeaea;
          padding-bottom: 0.5em; margin-bottom: 1em; text-align: center; margin-top: 0;
        }
        div[contenteditable] h2 {
          font-size: 1.6em; margin-top: 1.5em; margin-bottom: 0.75em;
          color: #c2410c; text-align: center;
        }
        div[contenteditable] p { margin-bottom: 1em; text-indent: 1.5em; text-align: justify; }
        @media print {
          header, aside, footer { display: none !important; }
          section { padding: 0 !important; overflow: visible !important; }
        }
      `}</style>

      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200 px-4 sm:px-6 py-3 flex items-center justify-between shadow-sm">
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="p-2 hover:bg-gray-100 rounded-lg md:hidden"
          >
            {isSidebarOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
          <div className="bg-orange-600 p-2 rounded-lg">
            <FileText className="text-white w-4 h-4" />
          </div>
          <h1 className="font-bold text-lg tracking-tight hidden sm:block">NovelCraft</h1>
        </div>

        <div className="flex items-center gap-1 sm:gap-2 overflow-x-auto no-scrollbar mx-2 flex-1 justify-center sm:justify-start">
          <select
            value={fontFamily}
            onChange={(e) => setFontFamily(e.target.value)}
            className="text-xs border-none bg-gray-50 rounded-md px-2 py-1 outline-none hover:bg-gray-100 cursor-pointer"
          >
            {FONTS.map((f) => (
              <option key={f.value} value={f.value}>{f.label}</option>
            ))}
          </select>

          <div className="h-6 w-px bg-gray-200 hidden sm:block" />

          <select
            value={fontSize}
            onChange={(e) => setFontSize(Number(e.target.value))}
            className="text-xs border-none bg-gray-50 rounded-md px-2 py-1 outline-none hover:bg-gray-100 cursor-pointer"
          >
            {FONT_SIZES.map((s) => (
              <option key={s} value={s}>{s}px</option>
            ))}
          </select>

          <div className="h-6 w-px bg-gray-200 hidden sm:block" />

          <div className="items-center bg-gray-50 rounded-md p-0.5 hidden sm:flex">
            {([
              { id: "left", icon: AlignLeft },
              { id: "center", icon: AlignCenter },
              { id: "right", icon: AlignRight },
              { id: "justify", icon: AlignJustify },
            ] as const).map(({ id, icon: Icon }) => (
              <button
                key={id}
                onClick={() => setAlignment(id)}
                className={cn(
                  "p-1.5 rounded transition-all",
                  alignment === id ? "bg-white shadow-sm text-orange-600" : "text-gray-400 hover:text-gray-600"
                )}
              >
                <Icon size={14} />
              </button>
            ))}
          </div>

          <div className="h-6 w-px bg-gray-200 hidden sm:block" />

          <button
            onClick={() => setIsBold(!isBold)}
            className={cn("p-1.5 rounded", isBold ? "bg-orange-100 text-orange-600" : "text-gray-400 hover:bg-gray-100")}
          >
            <Bold size={14} />
          </button>
          <button
            onClick={() => setIsItalic(!isItalic)}
            className={cn("p-1.5 rounded", isItalic ? "bg-orange-100 text-orange-600" : "text-gray-400 hover:bg-gray-100")}
          >
            <Italic size={14} />
          </button>

          <div className="h-6 w-px bg-gray-200 hidden sm:block" />

          <button
            onClick={() => setIsEditable(!isEditable)}
            className={cn(
              "p-1.5 rounded flex items-center gap-1.5 text-xs font-medium transition-all",
              isEditable ? "text-green-600 hover:bg-green-50" : "bg-red-50 text-red-600 border border-red-100"
            )}
          >
            {isEditable ? <Unlock size={14} /> : <Lock size={14} />}
            <span className="hidden xl:inline">
              {isEditable
                ? language === "ar" ? "تعديل نشط" : "Editing On"
                : language === "ar" ? "تم القفل" : "Locked"}
            </span>
          </button>
        </div>

        <div className="flex items-center gap-1 sm:gap-2">
          <button
            onClick={() => window.print()}
            title={language === "ar" ? "طباعة" : "Print"}
            className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-all hidden sm:block"
          >
            <Settings2 size={18} />
          </button>
          <button
            onClick={handleExportHTML}
            disabled={!content}
            title={language === "ar" ? "حفظ كـ HTML" : "Save as HTML"}
            className="p-2 text-gray-400 hover:text-orange-600 hover:bg-orange-50 rounded-full transition-all disabled:opacity-40"
          >
            <Globe size={18} />
          </button>
          <button
            onClick={handleExportPDF}
            disabled={!content || isGenerating}
            className="bg-[#1a1a1a] text-white px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium flex items-center gap-1.5 hover:bg-black transition-all disabled:opacity-50 shadow-sm"
          >
            <Download size={14} />
            <span className="hidden md:inline">{language === "ar" ? "تحميل PDF" : "Download PDF"}</span>
          </button>
        </div>
      </header>

      <main className="flex-1 flex h-[calc(100vh-64px)] overflow-hidden relative">
        {/* Sidebar */}
        <aside
          className={cn(
            "absolute md:relative z-40 h-full bg-white border-gray-100 flex flex-col transition-all duration-300 shadow-2xl md:shadow-none overflow-hidden",
            language === "ar" ? "right-0 border-l" : "left-0 border-r",
            isSidebarOpen ? "w-72 sm:w-80 p-4 sm:p-6" : "w-0 p-0"
          )}
        >
          {isSidebarOpen && (
            <div className="flex flex-col gap-5 h-full min-w-[240px]">
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
                  {language === "ar" ? "فكرة الرواية أو التلخيص" : "Novel Concept or Summary"}
                </label>
                <textarea
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  dir={language === "ar" ? "rtl" : "ltr"}
                  placeholder={
                    language === "ar"
                      ? "اكتب ملخصاً بسيطاً أو فكرة لتبدأ، سأحاول كتابة فصول طويلة ومفصلة..."
                      : "Enter a brief summary or idea to start..."
                  }
                  className="w-full h-40 sm:h-48 p-3 bg-gray-50 border border-gray-100 rounded-2xl text-sm focus:ring-2 focus:ring-orange-100 outline-none transition-all resize-none"
                />
              </div>

              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Language / اللغة</span>
                  <div className="bg-gray-200 p-1 rounded-full flex gap-1">
                    <button
                      onClick={() => setLanguage("ar")}
                      className={cn(
                        "px-3 py-1.5 rounded-full text-[9px] font-bold uppercase transition-all",
                        language === "ar" ? "bg-white shadow-sm text-black" : "opacity-40 hover:opacity-100"
                      )}
                    >
                      Arabic
                    </button>
                    <button
                      onClick={() => setLanguage("en")}
                      className={cn(
                        "px-3 py-1.5 rounded-full text-[9px] font-bold uppercase transition-all",
                        language === "en" ? "bg-white shadow-sm text-black" : "opacity-40 hover:opacity-100"
                      )}
                    >
                      English
                    </button>
                  </div>
                </div>

                <button
                  onClick={handleGenerate}
                  disabled={isGenerating || !input.trim()}
                  className="w-full h-12 bg-orange-600 text-white rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-orange-700 transition-all shadow-lg shadow-orange-100 disabled:opacity-50"
                >
                  {isGenerating ? <Loader2 className="animate-spin" size={18} /> : <Sparkles size={18} />}
                  {language === "ar" ? "توليد رواية إبداعية" : "Generate Creative Novel"}
                </button>

                <button
                  onClick={handleDirectFormat}
                  disabled={isGenerating || !input.trim()}
                  className="w-full h-12 bg-white text-gray-700 border-2 border-gray-100 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-gray-50 transition-all disabled:opacity-50"
                >
                  <FileText size={18} />
                  {language === "ar" ? "تنسيق مباشر للنص" : "Direct Format Text"}
                </button>
              </div>

              <div className="mt-auto pt-4 border-t border-gray-50 space-y-2">
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                  {language === "ar" ? "تباعد الأسطر" : "LINE HEIGHT"}
                </span>
                <input
                  type="range" min="1" max="3" step="0.1"
                  value={lineHeight}
                  onChange={(e) => setLineHeight(Number(e.target.value))}
                  className="w-full h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-orange-600"
                />
              </div>
            </div>
          )}
        </aside>

        {/* Mobile overlay */}
        {isSidebarOpen && (
          <div
            className="absolute inset-0 z-30 bg-black/10 md:hidden"
            onClick={() => setIsSidebarOpen(false)}
          />
        )}

        {/* Editor */}
        <section className="flex-1 overflow-y-auto p-4 sm:p-8 md:p-12 lg:p-20 bg-[#FDFCFB] relative">
          {isGenerating && (
            <div className="absolute top-0 left-0 right-0 z-10 px-8 pt-3">
              <div className="max-w-3xl mx-auto space-y-1.5">
                <div className="flex justify-between items-center text-[10px] font-bold text-orange-600 uppercase tracking-widest">
                  <span>{language === "ar" ? "جاري تأليف الرواية..." : "Crafting your novel..."}</span>
                  <span>{Math.round(progress)}%</span>
                </div>
                <div className="h-1.5 w-full bg-orange-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-orange-600 transition-all duration-500"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>
            </div>
          )}

          <div className="max-w-3xl mx-auto">
            {!content && !isGenerating && (
              <div className="h-[60vh] flex flex-col items-center justify-center text-center space-y-4">
                <div className="w-16 h-16 bg-orange-50 rounded-full flex items-center justify-center text-orange-400">
                  <Plus size={32} />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-gray-700">Start your masterpiece</h2>
                  <p className="text-gray-400 text-sm max-w-xs mx-auto mt-1">
                    {language === "ar"
                      ? "أدخل فكرتك في القائمة الجانبية ودع الذكاء الاصطناعي يحولها لرواية"
                      : "Enter your idea in the sidebar and let AI craft your novel."}
                  </p>
                </div>
              </div>
            )}

            {isGenerating && !content && (
              <div className="space-y-6 opacity-30 select-none pointer-events-none mt-8">
                <div className="h-12 bg-gray-200 rounded-lg w-3/4 animate-pulse" />
                <div className="space-y-3">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className="h-4 bg-gray-100 rounded w-full animate-pulse" />
                  ))}
                </div>
              </div>
            )}

            {content && (
              <div
                ref={editorRef}
                contentEditable={isEditable}
                suppressContentEditableWarning
                onBlur={(e) => setContent(e.currentTarget.innerHTML)}
                style={{
                  fontFamily,
                  fontSize: `${fontSize}px`,
                  textAlign: alignment,
                  fontWeight: isBold ? "bold" : "normal",
                  fontStyle: isItalic ? "italic" : "normal",
                  lineHeight,
                  direction: language === "ar" ? "rtl" : "ltr",
                }}
                className="outline-none min-h-[80vh]"
                dangerouslySetInnerHTML={{ __html: content }}
              />
            )}
          </div>
        </section>
      </main>

      {/* Floating font controls */}
      {content && (
        <div className="fixed bottom-8 right-8 bg-white border border-gray-200 rounded-full px-4 py-2 shadow-xl flex items-center gap-3 z-50">
          <button onClick={() => setFontSize((s) => Math.min(s + 2, 32))} className="p-1.5 hover:bg-gray-100 rounded-full text-sm font-bold text-gray-600">A+</button>
          <button onClick={() => setFontSize((s) => Math.max(s - 2, 12))} className="p-1.5 hover:bg-gray-100 rounded-full text-sm font-bold text-gray-600">A-</button>
          <div className="w-px h-5 bg-gray-200" />
          <button onClick={() => setIsEditable(!isEditable)} className={isEditable ? "text-orange-600" : "text-gray-400"}>
            {isEditable ? <Unlock size={16} /> : <Lock size={16} />}
          </button>
        </div>
      )}

      {/* Footer with policy links */}
      <footer className="border-t border-gray-100 py-6 text-center text-xs text-gray-400 bg-white">
        <div className="flex justify-center gap-5 flex-wrap mb-2">
          <a href="/about" className="hover:text-orange-600 transition-colors">عن الموقع</a>
          <a href="/privacy-policy" className="hover:text-orange-600 transition-colors">سياسة الخصوصية</a>
          <a href="/terms" className="hover:text-orange-600 transition-colors">شروط الاستخدام</a>
          <a href="/contact" className="hover:text-orange-600 transition-colors">تواصل معنا</a>
        </div>
        <p>© {new Date().getFullYear()} NovelCraft — المصنع العالمي للروايات الإبداعية</p>
      </footer>
    </div>
  );
}
