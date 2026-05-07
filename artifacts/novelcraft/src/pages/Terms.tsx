export default function Terms() {
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
        <span className="text-gray-500 text-sm">شروط الاستخدام</span>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-16 space-y-10 text-[#1a1a1a]">
        <div className="space-y-3">
          <h1 className="text-4xl font-bold" style={{ fontFamily: '"Amiri", serif' }}>شروط الاستخدام</h1>
          <p className="text-gray-500 text-sm">آخر تحديث: مايو 2025</p>
        </div>

        <p className="text-gray-700 leading-relaxed text-lg">
          مرحبًا بك في <strong>NovelCraft</strong>. باستخدامك لهذا الموقع، فأنت توافق على الشروط والأحكام التالية.
          يُرجى قراءتها بعناية قبل استخدام الخدمة.
        </p>

        {[
          {
            title: "١. قبول الشروط",
            content: `باستخدامك لموقع NovelCraft، فأنت تقر بأنك قرأت هذه الشروط وفهمتها ووافقت على الالتزام بها. إذا كنت لا توافق على هذه الشروط، يُرجى التوقف عن استخدام الموقع.`,
          },
          {
            title: "٢. وصف الخدمة",
            content: `NovelCraft هو موقع إلكتروني يستخدم تقنية الذكاء الاصطناعي لمساعدة المستخدمين على توليد الروايات الإبداعية وتنسيق النصوص. الخدمة متاحة كما هي، وقد تتغير أو تتوقف في أي وقت.`,
          },
          {
            title: "٣. الاستخدام المقبول",
            content: `يجب عليك استخدام الموقع لأغراض مشروعة وقانونية فقط. يُحظر عليك:
• نشر محتوى مسيء أو غير لائق أو ينتهك حقوق الآخرين.
• محاولة اختراق الموقع أو الوصول غير المصرح به إليه.
• استخدام الخدمة لنشر محتوى تجاري أو بريد مزعج.
• انتهاك أي قوانين أو أنظمة سارية.`,
          },
          {
            title: "٤. المحتوى المُولَّد بالذكاء الاصطناعي",
            content: `المحتوى المُولَّد بواسطة أداة الذكاء الاصطناعي في NovelCraft هو محتوى مُنشأ آليًا. يجب عليك:
• مراجعة المحتوى المُولَّد قبل استخدامه.
• التحقق من دقة المعلومات الواردة في المحتوى.
• عدم الاعتماد على المحتوى المُولَّد كمصدر أكاديمي أو قانوني.
أنت وحدك المسؤول عن أي محتوى تختار نشره أو استخدامه.`,
          },
          {
            title: "٥. حقوق الملكية الفكرية",
            content: `جميع المحتويات الأصلية على الموقع (التصميم، الشعار، الكود) هي ملكية حصرية لـ NovelCraft. أما المحتوى المُولَّد بالذكاء الاصطناعي بناءً على مدخلاتك، فأنت تحتفظ بحق استخدامه لأغراض شخصية وفقًا للقوانين المعمول بها.`,
          },
          {
            title: "٦. إخلاء المسؤولية",
            content: `تُقدَّم الخدمة "كما هي" دون أي ضمانات صريحة أو ضمنية. لا نضمن:
• دقة المحتوى المُولَّد أو اكتماله.
• استمرارية الخدمة أو خلوّها من الأخطاء.
• ملاءمة المحتوى لأغراض معينة.`,
          },
          {
            title: "٧. تحديد المسؤولية",
            content: `لن يكون NovelCraft مسؤولًا عن أي أضرار مباشرة أو غير مباشرة أو عرضية تنشأ عن استخدامك للخدمة، بما في ذلك فقدان البيانات أو الأرباح.`,
          },
          {
            title: "٨. الإعلانات",
            content: `يعرض موقعنا إعلانات من خلال Google AdSense. هذه الإعلانات يديرها Google وخاضعة لسياسة خصوصية Google. لا نتحكم في محتوى هذه الإعلانات ولسنا مسؤولين عنها.`,
          },
          {
            title: "٩. التعديلات على الشروط",
            content: `نحتفظ بحق تعديل هذه الشروط في أي وقت. سيتم نشر أي تغييرات على هذه الصفحة مع تحديث تاريخ "آخر تحديث". استمرارك في استخدام الموقع بعد التعديلات يُعدّ موافقة على الشروط المُعدَّلة.`,
          },
          {
            title: "١٠. القانون الحاكم",
            content: `تخضع هذه الشروط وتُفسَّر وفقًا للقوانين المعمول بها. أي نزاعات تنشأ عن استخدام الموقع ستُحلّ وفقًا لهذه القوانين.`,
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
