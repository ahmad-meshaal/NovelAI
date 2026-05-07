export default function About() {
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
        <span className="text-gray-500 text-sm">عن الموقع</span>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-16 space-y-12 text-[#1a1a1a]">
        <div className="text-center space-y-4">
          <div className="w-20 h-20 bg-orange-600 rounded-2xl flex items-center justify-center mx-auto">
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <h1 className="text-4xl font-bold" style={{ fontFamily: '"Amiri", serif' }}>عن NovelCraft</h1>
          <p className="text-gray-500">المصنع العالمي للروايات الإبداعية</p>
        </div>

        <div className="bg-orange-50 border border-orange-100 rounded-2xl p-8 space-y-4">
          <h2 className="text-2xl font-bold text-orange-700">ما هو NovelCraft؟</h2>
          <p className="text-gray-700 leading-loose text-lg">
            NovelCraft هو منصة ذكاء اصطناعي متطورة مخصصة لمساعدة الكُتّاب والمبدعين على تحويل أفكارهم إلى روايات أدبية ملحمية. 
            يستخدم الموقع أحدث نماذج الذكاء الاصطناعي لكتابة فصول طويلة ومفصلة بأسلوب أدبي رفيع.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              icon: "✍️",
              title: "توليد الروايات",
              desc: "أدخل فكرتك ويحولها الذكاء الاصطناعي إلى رواية إبداعية كاملة مع فصول مفصلة.",
            },
            {
              icon: "🌐",
              title: "دعم العربية والإنجليزية",
              desc: "يكتب الموقع بكلتا اللغتين بأسلوب أدبي راقٍ يناسب كل لغة.",
            },
            {
              icon: "📝",
              title: "محرر نصي متكامل",
              desc: "حرّر روايتك مباشرة في المتصفح مع خيارات تنسيق احترافية.",
            },
            {
              icon: "📄",
              title: "تصدير بصيغ متعددة",
              desc: "احفظ روايتك كملف PDF احترافي أو صفحة ويب HTML.",
            },
          ].map((feature) => (
            <div key={feature.title} className="bg-white border border-gray-100 rounded-2xl p-6 space-y-3 shadow-sm">
              <div className="text-3xl">{feature.icon}</div>
              <h3 className="font-bold text-lg">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold">رسالتنا</h2>
          <p className="text-gray-700 leading-loose text-lg">
            نؤمن بأن الإبداع الأدبي لا يجب أن يكون مقيدًا بالوقت أو الإمكانات. 
            NovelCraft يجمع بين قوة الذكاء الاصطناعي وجمال اللغة العربية لمنح كل شخص القدرة على كتابة روايته الخاصة.
            سواء كنت كاتبًا محترفًا أو مبتدئًا، موقعنا هنا لمساعدتك على تحويل أفكارك إلى قصص لا تُنسى.
          </p>
        </div>

        <div className="text-center">
          <a
            href="/"
            className="inline-block bg-orange-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-orange-700 transition-colors shadow-lg shadow-orange-100"
          >
            ابدأ روايتك الآن ✨
          </a>
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
