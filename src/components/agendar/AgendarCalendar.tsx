"use client";

import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

const CAL_ORIGIN = "https://cal.eu";
const CAL_EMBED_JS_URL = "https://cal.eu/embed/embed.js";
const CAL_LINK = "vianaterapia/30min";
const BRAND_COLOR = "#84432e"; // mesmo valor de --color-primary em globals.css

export default function AgendarCalendar() {
  useEffect(() => {
    (async () => {
      const cal = await getCalApi({ embedJsUrl: CAL_EMBED_JS_URL });
      cal("ui", {
        theme: "light",
        styles: { branding: { brandColor: BRAND_COLOR } },
        hideEventTypeDetails: false,
      });
    })();
  }, []);

  return (
    <section className="bg-surface px-6 pb-16 md:pb-24">
      <div className="max-w-5xl mx-auto rounded-4xl overflow-hidden">
        <Cal
          calLink={CAL_LINK}
          calOrigin={CAL_ORIGIN}
          style={{ width: "100%" }}
          config={{ layout: "month_view" }}
        />
      </div>
    </section>
  );
}
