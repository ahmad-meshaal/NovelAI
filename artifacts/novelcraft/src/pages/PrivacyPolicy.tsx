export default function PrivacyPolicy() {
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
        <span className="text-gray-500 text-sm">سياسة الخصوصية</span>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-16 space-y-10 text-[#1a1a1a]">
        <div className="space-y-3">
          <h1 className="text-4xl font-bold" style={{ fontFamily: '"Amiri", serif' }}>سياسة الخصوصية</h1>
          <p className="text-gray-500 text-sm">آخر تحديث: مايو 2025</p>
        </div>

        <p className="text-gray-700 leading-relaxed text-lg">
          نرحب بك في <strong>NovelCraft</strong>. نحن نحترم خصوصيتك ونلتزم بحماية بياناتك الشخصية.
          تصف هذه السياسة كيفية جمع معلوماتك واستخدامها وحمايتها عند استخدامك لموقعنا.
        </p>

        {[
          {
            title: "١. المعلومات التي نجمعها",
            content: `نجمع أنواعًا مختلفة من المعلومات بأساليب متعددة:
• المعلومات التي تُقدمها مباشرةً: عند استخدام ميزة توليد الروايات، نتلقى المحتوى الذي تدخله (فكرة الرواية أو الملخص).
• بيانات الاستخدام: نجمع تلقائيًا معلومات حول كيفية استخدامك للخدمة، بما فيها عنوان IP، نوع المتصفح، الصفحات التي تزورها، والوقت المستغرق.
• ملفات تعريف الارتباط (Cookies): نستخدم ملفات تعريف الارتباط لتحسين تجربتك وتحليل حركة المرور على الموقع.`,
          },
          {
            title: "٢. كيفية استخدام المعلومات",
            content: `نستخدم المعلومات التي نجمعها للأغراض التالية:
• تشغيل الخدمة وتحسينها وتخصيصها.
• تحليل استخدام الموقع وتحسين الأداء.
• عرض إعلانات ذات صلة عبر Google AdSense.
• الامتثال للالتزامات القانونية.`,
          },
          {
            title: "٣. Google AdSense والإعلانات",
            content: `نستخدم Google AdSense لعرض الإعلانات على موقعنا. قد تستخدم Google ملفات تعريف الارتباط لعرض إعلانات بناءً على زياراتك السابقة لهذا الموقع والمواقع الأخرى. يمكنك إيقاف تشغيل الإعلانات المخصصة من خلال زيارة إعدادات إعلانات Google على:
https://www.google.com/settings/ads

لمزيد من المعلومات حول كيفية استخدام Google للبيانات، يُرجى مراجعة سياسة خصوصية Google:
https://policies.google.com/privacy`,
          },
          {
            title: "٤. ملفات تعريف الارتباط (Cookies)",
            content: `نستخدم ملفات تعريف الارتباط للأغراض التالية:
• ملفات تعريف الارتباط الضرورية: ضرورية لتشغيل الموقع بشكل صحيح.
• ملفات تعريف الارتباط التحليلية: تساعدنا على فهم كيفية استخدام الزوار للموقع.
• ملفات تعريف الارتباط الإعلانية: تُستخدم من قِبل Google AdSense لتقديم إعلانات ذات صلة.

يمكنك التحكم في ملفات تعريف الارتباط من خلال إعدادات متصفحك. يُرجى ملاحظة أن تعطيل ملفات تعريف الارتباط قد يؤثر على بعض وظائف الموقع.`,
          },
          {
            title: "٥. مشاركة البيانات مع أطراف ثالثة",
            content: `لا نبيع بياناتك الشخصية أو نؤجرها لأطراف ثالثة. قد نشارك معلوماتك في الحالات التالية:
• مزودو الخدمات: نعمل مع شركاء موثوقين (مثل Google Gemini AI لتوليد المحتوى) يساعدوننا في تشغيل الموقع.
• المتطلبات القانونية: قد نكشف عن معلوماتك إذا كان ذلك مطلوبًا بموجب القانون.`,
          },
          {
            title: "٦. أمان البيانات",
            content: `نتخذ تدابير أمنية معقولة لحماية معلوماتك من الوصول غير المصرح به. ومع ذلك، لا يمكن ضمان أمان المعلومات المنقولة عبر الإنترنت بشكل مطلق.`,
          },
          {
            title: "٧. حقوق المستخدمين",
            content: `لديك الحق في:
• الوصول إلى بياناتك الشخصية.
• تصحيح بياناتك غير الدقيقة.
• طلب حذف بياناتك.
• الاعتراض على معالجة بياناتك.
• سحب موافقتك في أي وقت.`,
          },
          {
            title: "٨. خصوصية الأطفال",
            content: `لا يستهدف موقعنا الأطفال دون سن 13 عامًا، ولا نجمع عن قصد معلومات شخصية منهم. إذا علمت أن طفلاً دون هذه السن قد قدّم بيانات شخصية، يُرجى التواصل معنا فورًا.`,
          },
          {
            title: "٩. التغييرات على هذه السياسة",
            content: `قد نحدّث سياسة الخصوصية هذه من وقت لآخر. سنُعلمك بأي تغييرات بنشر السياسة الجديدة على هذه الصفحة مع تحديث تاريخ "آخر تحديث".`,
          },
          {
            title: "١٠. التواصل معنا",
            content: `إذا كان لديك أي أسئلة حول سياسة الخصوصية، يُرجى التواصل معنا عبر صفحة التواصل.`,
          },
        ].map((section) => (
          <section key={section.title} className="space-y-3">
            <h2 className="text-xl font-bold text-orange-700">{section.title}</h2>
            <p className="text-gray-700 leading-loose whitespace-pre-line">{section.content}</p>
          </section>
        ))}
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
