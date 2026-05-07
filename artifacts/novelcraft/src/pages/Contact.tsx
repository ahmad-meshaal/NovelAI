import { useState } from "react";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="min-h-screen bg-[#FDFCFB]" dir="rtl" lang="ar">
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200 px-6 py-4 flex items-center gap-3 shadow-sm">
        <div className="bg-orange-600 p-2 rounded-lg">
          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        </div>
        <a href="/" className="font-bold text-lg tracking-tight">NovelCraft</a>
        <span className="text-gray-300 mx-2">|</span>
        <span className="text-gray-500 text-sm">تواصل معنا</span>
      </header>

      <main className="max-w-2xl mx-auto px-6 py-16 space-y-10">
        <div className="space-y-3">
          <h1 className="text-4xl font-bold" style={{ fontFamily: '"Amiri", serif' }}>تواصل معنا</h1>
          <p className="text-gray-600 leading-relaxed">
            هل لديك سؤال أو اقتراح أو مشكلة؟ يسعدنا سماعك. يمكنك التواصل معنا من خلال النموذج أدناه.
          </p>
        </div>

        {sent ? (
          <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center space-y-3">
            <div className="text-5xl">✅</div>
            <h2 className="text-xl font-bold text-green-700">تم إرسال رسالتك بنجاح</h2>
            <p className="text-gray-600">شكرًا لتواصلك معنا. سنرد عليك في أقرب وقت ممكن.</p>
            <button
              onClick={() => { setSent(false); setForm({ name: "", email: "", subject: "", message: "" }); }}
              className="mt-4 bg-orange-600 text-white px-6 py-2 rounded-full font-bold hover:bg-orange-700 transition-colors"
            >
              إرسال رسالة أخرى
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-600">الاسم *</label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="اسمك الكامل"
                  className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-orange-100 outline-none transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-600">البريد الإلكتروني *</label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="example@email.com"
                  className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-orange-100 outline-none transition-all"
                  dir="ltr"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-600">الموضوع *</label>
              <select
                required
                value={form.subject}
                onChange={(e) => setForm({ ...form, subject: e.target.value })}
                className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-orange-100 outline-none transition-all"
              >
                <option value="">اختر الموضوع</option>
                <option value="question">سؤال عام</option>
                <option value="bug">الإبلاغ عن مشكلة</option>
                <option value="suggestion">اقتراح</option>
                <option value="other">أخرى</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-600">الرسالة *</label>
              <textarea
                required
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="اكتب رسالتك هنا..."
                rows={5}
                className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-orange-100 outline-none transition-all resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full h-12 bg-orange-600 text-white rounded-2xl font-bold hover:bg-orange-700 transition-colors shadow-lg shadow-orange-100"
            >
              إرسال الرسالة
            </button>
          </form>
        )}

        <div className="bg-orange-50 border border-orange-100 rounded-2xl p-6 space-y-2">
          <h3 className="font-bold text-orange-700">معلومات التواصل</h3>
          <p className="text-gray-600 text-sm">
            يمكنك أيضًا التواصل معنا عبر GitHub: {" "}
            <a href="https://github.com/ahmad-meshaal/NovelAI" target="_blank" rel="noopener noreferrer" className="text-orange-600 underline">
              github.com/ahmad-meshaal/NovelAI
            </a>
          </p>
          <p className="text-gray-500 text-xs">نرد على الرسائل خلال 24-48 ساعة</p>
        </div>
      </main>

      <footer className="border-t border-gray-100 py-8 text-center text-sm text-gray-400">
        <div className="flex justify-center gap-6 flex-wrap">
          <a href="/" className="hover:text-orange-600 transition-colors">الرئيسية</a>
          <a href="/about" className="hover:text-orange-600 transition-colors">عن الموقع</a>
          <a href="/privacy-policy" className="hover:text-orange-600 transition-colors">سياسة الخصوصية</a>
          <a href="/terms" className="hover:text-orange-600 transition-colors">شروط الاستخدام</a>
          <a href="/contact" className="hover:text-orange-600 transition-colors">تواصل معنا</a>
        </div>
        <p className="mt-4">© {new Date().getFullYear()} NovelCraft. جميع الحقوق محفوظة.</p>
      </footer>
    </div>
  );
}
