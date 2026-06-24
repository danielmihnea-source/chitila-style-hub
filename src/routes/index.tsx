import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { MapPin, Phone, Clock, Star, Scissors, Sparkles, Send } from "lucide-react";
import heroImg from "@/assets/hero-barbershop.jpg";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";

// NOTE: înlocuiește numărul de WhatsApp cu cel real al frizeriei
const WHATSAPP_NUMBER = "40712345678";
const ADDRESS = "Strada Aurel Vlaicu 75, Chitila, Ilfov";
const MAPS_QUERY = encodeURIComponent(ADDRESS);

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Frizerie Chitila – Tunsori bărbătești & bărbierit | Aurel Vlaicu 75" },
      {
        name: "description",
        content:
          "Frizerie în Chitila, Ilfov – tunsori bărbătești, contur barbă și bărbierit clasic. Programări rapide pe WhatsApp. Str. Aurel Vlaicu 75. Rating Google 5.0.",
      },
      { property: "og:title", content: "Frizerie Chitila – Aurel Vlaicu 75" },
      {
        property: "og:description",
        content: "Tunsori bărbătești și bărbierit clasic în Chitila. Programări pe WhatsApp.",
      },
      { property: "og:url", content: "/" },
      { property: "og:image", content: heroImg },
      { name: "twitter:image", content: heroImg },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "HairSalon",
          name: "Frizerie Chitila",
          image: heroImg,
          address: {
            "@type": "PostalAddress",
            streetAddress: "Strada Aurel Vlaicu 75",
            addressLocality: "Chitila",
            addressRegion: "Ilfov",
            addressCountry: "RO",
          },
          aggregateRating: { "@type": "AggregateRating", ratingValue: "5.0", reviewCount: "5" },
          openingHoursSpecification: [
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
              opens: "09:00",
              closes: "19:00",
            },
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: "Saturday",
              opens: "09:00",
              closes: "18:00",
            },
          ],
        }),
      },
    ],
  }),
  component: Index,
});

const services = [
  { name: "Tuns bărbătesc", desc: "Tunsoare modernă sau clasică, adaptată stilului tău.", price: "50 lei" },
  { name: "Tuns + spălat", desc: "Tunsoare completă cu spălat și styling final.", price: "60 lei" },
  { name: "Contur barbă", desc: "Definirea liniilor și aranjarea bărbii cu briciul.", price: "30 lei" },
  { name: "Bărbierit clasic", desc: "Bărbierit cu prosop cald, spumă și brici.", price: "45 lei" },
  { name: "Tuns + barbă", desc: "Pachet complet: tunsoare și aranjat barbă.", price: "75 lei" },
  { name: "Tuns copii", desc: "Tunsori pentru cei mici, cu răbdare și grijă.", price: "40 lei" },
];

const reviews = [
  { name: "Andrei M.", text: "Cea mai bună frizerie din zonă! Tunsoarea exact cum am cerut, atmosferă plăcută.", rating: 5 },
  { name: "Cristian P.", text: "Profesionalism și atenție la detalii. Recomand cu încredere!", rating: 5 },
  { name: "Vlad I.", text: "Mereu plec mulțumit. Prețuri corecte, servicii de calitate.", rating: 5 },
  { name: "Mihai D.", text: "Băieții știu ce fac. Bărbierit clasic excelent.", rating: 5 },
  { name: "Răzvan T.", text: "Locul perfect pentru o tunsoare de încredere în Chitila.", rating: 5 },
];

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />
      <Hero />
      <About />
      <Services />
      <Gallery />
      <Reviews />
      <Booking />
      <Location />
      <Footer />
      <WhatsAppFab />
    </main>
  );
}

function Header() {
  return (
    <header className="fixed top-0 inset-x-0 z-40 backdrop-blur-md bg-background/70 border-b border-border">
      <div className="max-w-6xl mx-auto px-5 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2">
          <Scissors className="h-5 w-5 text-primary" />
          <span className="font-display text-lg font-bold tracking-tight">Frizerie Chitila</span>
        </a>
        <nav className="hidden md:flex items-center gap-7 text-sm text-muted-foreground">
          <a href="#despre" className="hover:text-primary transition">Despre</a>
          <a href="#servicii" className="hover:text-primary transition">Servicii</a>
          <a href="#galerie" className="hover:text-primary transition">Galerie</a>
          <a href="#recenzii" className="hover:text-primary transition">Recenzii</a>
          <a href="#contact" className="hover:text-primary transition">Contact</a>
        </nav>
        <a
          href="#programare"
          className="text-sm font-semibold bg-primary text-primary-foreground px-4 py-2 rounded-md hover:opacity-90 transition"
        >
          Programare
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      <img
        src={heroImg}
        alt="Interior frizerie Chitila"
        width={1600}
        height={1024}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/85 to-background/40" />
      <div className="relative max-w-6xl mx-auto px-5 py-24 w-full">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-medium mb-6">
            <Star className="h-3.5 w-3.5 fill-primary" />
            5.0 pe Google · Chitila, Ilfov
          </div>
          <h1 className="font-display text-5xl md:text-7xl font-bold leading-[1.05] mb-6">
            Frizeria ta de încredere din <span className="text-primary">Chitila</span>.
          </h1>
          <p className="text-lg text-muted-foreground mb-8 max-w-xl">
            Tunsori bărbătești, contur barbă și bărbierit clasic – într-un spațiu calm, cu atenție la fiecare detaliu.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Salut! Aș dori o programare la frizerie.")}`}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-6 py-3 rounded-md hover:opacity-90 transition"
            >
              <Phone className="h-4 w-4" /> WhatsApp
            </a>
            <a
              href="#programare"
              className="inline-flex items-center gap-2 border border-border bg-card/60 px-6 py-3 rounded-md font-semibold hover:border-primary/50 transition"
            >
              Fă o programare
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="despre" className="py-24 px-5">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div>
          <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-3">Despre salon</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Frizerie clasică, atmosferă modernă.</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Suntem o frizerie de cartier din Chitila, dedicată bărbaților care apreciază o tunsoare bine
            executată și un loc unde se simt în largul lor. Lucrăm cu răbdare, ascultăm ce vrei și livrăm
            de fiecare dată un rezultat de care ești mândru.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            De la fade-uri precise la bărbierit clasic cu prosop cald – fiecare serviciu primește atenția
            pe care o merită.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <Stat value="5.0" label="Rating Google" />
          <Stat value="5+" label="Ani experiență" />
          <Stat value="100%" label="Recenzii pozitive" />
          <Stat value="6" label="Servicii oferite" />
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="border border-border bg-card p-6 rounded-lg">
      <div className="font-display text-4xl font-bold text-primary mb-1">{value}</div>
      <div className="text-sm text-muted-foreground">{label}</div>
    </div>
  );
}

function Services() {
  return (
    <section id="servicii" className="py-24 px-5 bg-card/40 border-y border-border">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-3">Servicii & prețuri</p>
          <h2 className="text-4xl md:text-5xl font-bold">Pentru fiecare stil, serviciul potrivit.</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s) => (
            <div
              key={s.name}
              className="group border border-border bg-card p-6 rounded-lg hover:border-primary/60 transition"
            >
              <div className="flex items-start justify-between mb-3">
                <Sparkles className="h-5 w-5 text-primary" />
                <span className="font-display text-xl font-bold text-primary">{s.price}</span>
              </div>
              <h3 className="font-display text-xl font-bold mb-2">{s.name}</h3>
              <p className="text-sm text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
        <p className="text-center text-xs text-muted-foreground mt-8">
          * Prețurile sunt orientative și pot varia în funcție de complexitatea serviciului.
        </p>
      </div>
    </section>
  );
}

function Gallery() {
  const imgs = [g1, g2, g3, g4];
  return (
    <section id="galerie" className="py-24 px-5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-3">Galerie</p>
          <h2 className="text-4xl md:text-5xl font-bold">Munca noastră vorbește.</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {imgs.map((src, i) => (
            <div key={i} className="relative aspect-square overflow-hidden rounded-lg group">
              <img
                src={src}
                alt={`Galerie frizerie ${i + 1}`}
                width={800}
                height={800}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Reviews() {
  return (
    <section id="recenzii" className="py-24 px-5 bg-card/40 border-y border-border">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 mb-3">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-primary text-primary" />
            ))}
          </div>
          <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-2">5.0 pe Google</p>
          <h2 className="text-4xl md:text-5xl font-bold">Ce spun clienții noștri.</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {reviews.map((r) => (
            <div key={r.name} className="border border-border bg-card p-6 rounded-lg">
              <div className="flex gap-1 mb-3">
                {[...Array(r.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-sm text-foreground/90 mb-4 leading-relaxed">"{r.text}"</p>
              <p className="text-sm font-semibold text-muted-foreground">— {r.name}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${MAPS_QUERY}`}
            target="_blank"
            rel="noopener"
            className="text-primary text-sm font-semibold hover:underline"
          >
            Vezi toate recenziile pe Google →
          </a>
        </div>
      </div>
    </section>
  );
}

function Booking() {
  const [form, setForm] = useState({ name: "", phone: "", service: services[0].name, date: "", note: "" });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text =
      `Salut! Aș dori o programare:%0A` +
      `👤 Nume: ${form.name}%0A` +
      `📞 Telefon: ${form.phone}%0A` +
      `✂️ Serviciu: ${form.service}%0A` +
      `📅 Data/ora: ${form.date}%0A` +
      (form.note ? `📝 Mențiuni: ${form.note}` : "");
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, "_blank");
  };

  return (
    <section id="programare" className="py-24 px-5">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-3">Programare</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-3">Fă-ți o programare în 30 de secunde.</h2>
          <p className="text-muted-foreground">Completează formularul și îți confirmăm pe WhatsApp.</p>
        </div>
        <form
          onSubmit={onSubmit}
          className="border border-border bg-card p-6 md:p-8 rounded-lg space-y-4"
        >
          <div className="grid md:grid-cols-2 gap-4">
            <Field label="Nume">
              <input
                required
                maxLength={80}
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full bg-input border border-border rounded-md px-3 py-2.5 focus:outline-none focus:border-primary"
              />
            </Field>
            <Field label="Telefon">
              <input
                required
                type="tel"
                maxLength={20}
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="w-full bg-input border border-border rounded-md px-3 py-2.5 focus:outline-none focus:border-primary"
              />
            </Field>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <Field label="Serviciu">
              <select
                value={form.service}
                onChange={(e) => setForm({ ...form, service: e.target.value })}
                className="w-full bg-input border border-border rounded-md px-3 py-2.5 focus:outline-none focus:border-primary"
              >
                {services.map((s) => (
                  <option key={s.name}>{s.name}</option>
                ))}
              </select>
            </Field>
            <Field label="Data și ora preferată">
              <input
                required
                type="datetime-local"
                value={form.date}
                onChange={(e) => setForm({ ...form, date: e.target.value })}
                className="w-full bg-input border border-border rounded-md px-3 py-2.5 focus:outline-none focus:border-primary"
              />
            </Field>
          </div>
          <Field label="Mențiuni (opțional)">
            <textarea
              rows={3}
              maxLength={400}
              value={form.note}
              onChange={(e) => setForm({ ...form, note: e.target.value })}
              className="w-full bg-input border border-border rounded-md px-3 py-2.5 focus:outline-none focus:border-primary resize-none"
            />
          </Field>
          <button
            type="submit"
            className="w-full inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground font-semibold px-6 py-3.5 rounded-md hover:opacity-90 transition"
          >
            <Send className="h-4 w-4" /> Trimite cererea pe WhatsApp
          </button>
        </form>
      </div>
    </section>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
        {label}
      </span>
      {children}
    </label>
  );
}

function Location() {
  return (
    <section id="contact" className="py-24 px-5 bg-card/40 border-y border-border">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10">
        <div>
          <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-3">Ne găsești aici</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Frizerie în Chitila.</h2>
          <div className="space-y-5">
            <InfoRow icon={<MapPin className="h-5 w-5 text-primary" />} title="Adresă">
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${MAPS_QUERY}`}
                target="_blank"
                rel="noopener"
                className="hover:text-primary transition"
              >
                {ADDRESS}
              </a>
            </InfoRow>
            <InfoRow icon={<Clock className="h-5 w-5 text-primary" />} title="Program">
              Luni – Vineri: 09:00 – 19:00<br />
              Sâmbătă: 09:00 – 18:00<br />
              Duminică: închis
            </InfoRow>
            <InfoRow icon={<Phone className="h-5 w-5 text-primary" />} title="WhatsApp">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener"
                className="hover:text-primary transition"
              >
                Scrie-ne pe WhatsApp
              </a>
            </InfoRow>
          </div>
        </div>
        <div className="rounded-lg overflow-hidden border border-border min-h-[400px] bg-card">
          <iframe
            title="Hartă Frizerie Chitila"
            src={`https://www.google.com/maps?q=${MAPS_QUERY}&output=embed`}
            className="w-full h-full min-h-[400px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}

function InfoRow({ icon, title, children }: { icon: React.ReactNode; title: string; children: React.ReactNode }) {
  return (
    <div className="flex gap-4">
      <div className="mt-1">{icon}</div>
      <div>
        <div className="font-semibold mb-1">{title}</div>
        <div className="text-muted-foreground">{children}</div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="py-10 px-5 border-t border-border">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-4 items-center justify-between text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <Scissors className="h-4 w-4 text-primary" />
          <span className="font-display font-bold text-foreground">Frizerie Chitila</span>
        </div>
        <p>© {new Date().getFullYear()} · Strada Aurel Vlaicu 75, Chitila, Ilfov</p>
      </div>
    </footer>
  );
}

function WhatsAppFab() {
  return (
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}`}
      target="_blank"
      rel="noopener"
      aria-label="Contactează-ne pe WhatsApp"
      className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full bg-primary text-primary-foreground shadow-lg flex items-center justify-center hover:scale-105 transition"
    >
      <Phone className="h-6 w-6" />
    </a>
  );
}
