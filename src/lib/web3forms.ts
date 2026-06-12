// Web3Forms delivers form submissions straight to OceanBayMarketing@outlook.com.
//
// SETUP (one time):
//   1. Go to https://web3forms.com and enter OceanBayMarketing@outlook.com
//   2. Web3Forms emails you an Access Key
//   3. Paste it below (or set VITE_WEB3FORMS_ACCESS_KEY in the build env)
//
// The access key is safe to expose in front-end code — that's how Web3Forms is
// designed to work. Spam is filtered on their side (with an optional honeypot).
const ENV = (import.meta as { env?: Record<string, string | undefined> }).env;

export const WEB3FORMS_ACCESS_KEY =
  ENV?.VITE_WEB3FORMS_ACCESS_KEY || "c572daa0-15e5-48f8-819f-42126fef6cfc";

export type Web3FormsResult = { success: boolean; message: string };

export async function submitToWeb3Forms(
  fields: Record<string, string>
): Promise<Web3FormsResult> {
  if (!WEB3FORMS_ACCESS_KEY || WEB3FORMS_ACCESS_KEY === "YOUR_WEB3FORMS_ACCESS_KEY") {
    return {
      success: false,
      message:
        "Form is not configured yet. Please email us directly at OceanBayMarketing@outlook.com.",
    };
  }

  try {
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ access_key: WEB3FORMS_ACCESS_KEY, ...fields }),
    });
    const data = await res.json();
    return {
      success: Boolean(data.success),
      message: data.message || (data.success ? "Sent." : "Something went wrong."),
    };
  } catch {
    return {
      success: false,
      message:
        "Network error — please try again, or email OceanBayMarketing@outlook.com directly.",
    };
  }
}
