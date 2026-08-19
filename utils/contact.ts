export const handleEmailClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
  e.preventDefault();
  
  const email = "shravanjain.dev@gmail.com";
  const mailtoUrl = `mailto:${email}`;
  const gmailWebUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}`;

  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

  if (isMobile) {
    // On mobile, native mail handlers (including Gmail app) intercept mailto: reliably.
    window.location.href = mailtoUrl;
  } else {
    // On desktop, prefer web Gmail to avoid dead clicks if no mail client is configured.
    window.open(gmailWebUrl, "_blank");
    
    // We also trigger the mailto in the background as a fallback.
    // If the user has a preferred desktop client (e.g. Outlook/Mac Mail), it will open.
    // If they don't, nothing bad happens (the browser silently ignores it),
    // but they still get the Gmail web composer from the line above.
    
    // Using a tiny delay so the window.open fires first and doesn't get blocked
    setTimeout(() => {
      window.location.href = mailtoUrl;
    }, 100);
  }
};
