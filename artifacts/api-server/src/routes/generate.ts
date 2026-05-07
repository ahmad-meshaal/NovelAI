import { Router, type IRouter } from "express";
import { ai } from "@workspace/integrations-gemini-ai";

const router: IRouter = Router();

router.post("/generate", async (req, res) => {
  try {
    const { prompt, language } = req.body as { prompt: string; language: "ar" | "en" };

    if (!prompt || typeof prompt !== "string" || !prompt.trim()) {
      res.status(400).json({ error: "prompt is required" });
      return;
    }

    const systemInstruction =
      language === "ar"
        ? "أنت كاتب روايات محترف وعالمي. مهمتك هي تحويل الفكرة إلى رواية أدبية ملحمية واسعة الخيال. يجب أن يكون كل فصل طويلاً جداً ومفصلاً بشكل هائل (بحد أدنى 6000 حرف للفصل الواحد). لا تختصر أي حدث. استغرق في وصف المشاعر العميقة، الأماكن بالتفصيل الممل، الرؤى البصرية، والحوارات الفلسفية الطويلة. أريد تفاصيل دقيقة جداً تجعل القارئ يغرق في عالم الرواية. استخدم لغة عربية فصحى فخمة وساحرة. أخرج النص بتنسيق HTML (h1 للعنوان، h2 للفصول، p للفقرات)."
        : "You are a world-class professional novelist. Your task is to transform the idea into an epic, highly imaginative literary novel. Each chapter MUST be extremely long and immensely detailed (minimum 6000 characters per chapter). Never summarize any event. Indulge in describing deep emotions, settings in exquisite detail, visual visions, and long philosophical dialogues. I want very precise details that make the reader drown in the world of the novel. Use high-end, magical prose. Output the text in HTML format (h1 for the title, h2 for chapters, p for paragraphs).";

    res.setHeader("Content-Type", "text/plain; charset=utf-8");
    res.setHeader("Transfer-Encoding", "chunked");
    res.setHeader("Cache-Control", "no-cache");

    const stream = await ai.models.generateContentStream({
      model: "gemini-2.5-flash",
      contents: [{ role: "user", parts: [{ text: prompt }] }],
      config: {
        systemInstruction,
        maxOutputTokens: 8192,
      },
    });

    for await (const chunk of stream) {
      const text = chunk.text;
      if (text) {
        res.write(text);
      }
    }

    res.end();
  } catch (error) {
    req.log.error({ error }, "Error generating novel");
    if (!res.headersSent) {
      res.status(500).json({ error: "Internal server error" });
    } else {
      res.end();
    }
  }
});

export default router;
