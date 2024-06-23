document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contactForm");
    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Formun normalde gönderilmesini engeller

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        if (name && email && message) {
            alert("Mesajınız başarıyla gönderildi!");
            form.reset(); // Formu sıfırlar
        } else {
            alert("Lütfen tüm alanları doldurun.");
        }
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const planets = {
        sun: {
            name: "Güneş",
            info: "Güneş, Güneş Sistemi'nin merkezinde yer alan bir yıldızdır."
        },
        mercury: {
            name: "Merkür",
            info: "Merkür, Güneş Sistemi'nin en küçük ve Güneş'e en yakın gezegenidir."
        },
        venus: {
            name: "Venüs",
            info: "Venüs, Güneş'e uzaklık açısından ikinci gezegendir ve büyüklük ve kütle açısından Dünya'ya en yakın olan gezegendir."
        },
        earth: {
            name: "Dünya",
            info: "Dünya, Güneş Sistemi'ndeki üçüncü gezegen ve üzerinde yaşam bulunan tek gezegendir."
        },
        mars: {
            name: "Mars",
            info: "Mars, Güneş Sistemi'ndeki dördüncü gezegendir ve kırmızımsı rengi nedeniyle 'Kızıl Gezegen' olarak da bilinir."
        },
        jupiter: {
            name: "Jüpiter",
            info: "Jüpiter, Güneş Sistemi'nin en büyük gezegenidir ve büyük bir gaz devidir."
        },
        saturn: {
            name: "Satürn",
            info: "Satürn, Güneş Sistemi'nde tanınmış büyük halkalarıyla bilinen bir gaz devidir."
        },
        uranus: {
            name: "Uranüs",
            info: "Uranüs, Güneş Sistemi'ndeki yedinci gezegendir ve yan yatmış bir eksende döner."
        },
        neptune: {
            name: "Neptün",
            info: "Neptün, Güneş Sistemi'ndeki sekizinci ve en uzak gezegendir."
        }
    };
});