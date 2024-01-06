import { Provider, LikeButton } from "@lyket/react";

<Provider
  apiKey="pt_8f1f26e50d58be724353a8609f099d"
  theme={{
    colors: {
      background: "#b8fff3",
      text: "violet",
      primary: "rgba(255, 224, 138, 0.4)"
    }
  }}
>
  <LikeButton
    namespace="my-blog-post"
    id="how-to-beat-me-at-chess"
  />
</Provider>
