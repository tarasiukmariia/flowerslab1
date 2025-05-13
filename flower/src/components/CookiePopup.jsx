import { useState, useEffect } from "react";
import CookieConsent, { getCookieConsentValue } from "react-cookie-consent";
import Modal from "./UI/Modal";
import Button from "./UI/Button";
import Input from "./UI/Input";

const CookiePopup = () => {
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    const savedConsent = getCookieConsentValue("cookie-preferences");
    const localConsent = localStorage.getItem("cookieConsent");

    if (savedConsent) {
      setPreferences(JSON.parse(savedConsent));
    } else if (localConsent === "rejected") {
      setPreferences({ necessary: true, analytics: false, marketing: false });
    }
  }, []);

  const handleAccept = () => {
    document.cookie = `cookie-preferences=${JSON.stringify(
      preferences
    )}; path=/; max-age=31536000`;
    localStorage.setItem("cookieConsent", "accepted");
    setShowSettings(false);
  };

  const handleReject = () => {
    document.cookie = "cookie-preferences=rejected; path=/; max-age=0";
    localStorage.setItem("cookieConsent", "rejected"); 
    setPreferences({ necessary: true, analytics: false, marketing: false });
    setShowSettings(false);
  };

  return (
    <>
      <CookieConsent
          location="bottom"
          buttonText="Налаштувати"
          declineButtonText="Відхилити"
          enableDeclineButton
          onAccept={() => setShowSettings(true)}
          style={{
            background: "#333",
            color: "#fff",
            justifyContent: "space-between",
            padding: "10px 20px",
            fontSize: "16px",
          }}
          buttonStyle={{
            background: "rgb(255,227,236)",
            color: "#000",
            border: "none",
            padding: "8px 16px",
            borderRadius: "4px",
            marginLeft: "10px",
          }}
          declineButtonStyle={{
            background: "rgb(90,62,66)", // червоний фон
            color: "#fff",
            border: "none",
            padding: "8px 16px",
            borderRadius: "4px",
          }}
      >
        Ми використовуємо файли cookie для покращення вашого досвіду.
      </CookieConsent>

      <Modal open={showSettings} onClose={() => setShowSettings(false)}>
        <h2>Налаштування файлів Cookie</h2>
        <Input
          label="Необхідні Cookies (завжди увімкнено)"
          id="necessary"
          type="checkbox"
          checked={preferences.necessary}
          disabled
        />
        <Input
          label="Аналітичні Cookies"
          id="analytics"
          type="checkbox"
          checked={preferences.analytics}
          onChange={() =>
            setPreferences((prev) => ({
              ...prev,
              analytics: !prev.analytics,
            }))
          }
        />
        <Input
          label="Маркетингові Cookies"
          id="marketing"
          type="checkbox"
          checked={preferences.marketing}
          onChange={() =>
            setPreferences((prev) => ({
              ...prev,
              marketing: !prev.marketing,
            }))
          }
        />
        <div className="modal-actions">
          <Button onClick={handleAccept}>Прийняти</Button>
          <Button textOnly onClick={handleReject}>
            Відхилити
          </Button>
        </div>
      </Modal>
    </>
  );
};

export default CookiePopup;
