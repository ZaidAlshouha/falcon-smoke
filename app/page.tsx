import Image from "next/image";
import { AnimatedCounter, BrandSignature, FalconMark, LuxuryHeader, WhatsAppIcon } from "./components/LuxuryClient";

const wa = "https://wa.me/962777961408";
type Product = { name: string; description: string; image: string };

const molasses: Product[] = [
  { name: "نخلة تفاحتين", description: "مذاق التفاحتين الكلاسيكي بنفحات غنية ومتوازنة.", image: "/products/12.jpeg" },
  { name: "مزايا ليمون بالنعناع", description: "حمضيات منعشة تلتقي ببرودة النعناع في خلطة صافية.", image: "/products/21.jpeg" },
  { name: "مزايا بطيخ ونعناع", description: "حلاوة البطيخ الناضج مع انتعاش نعناع خفيف.", image: "/products/16.jpeg" },
  { name: "مزايا تفاحتين بحريني", description: "خلطة بحرينية عميقة لمحبي نكهة التفاحتين الأصيلة.", image: "/products/17.jpeg" },
  { name: "مزايا علكة طبيعي", description: "نكهة علكة ناعمة بطابع حلو ومنعش يدوم طويلًا.", image: "/products/18.jpeg" },
  { name: "مزايا تفاحتين", description: "مزيج متزن من التفاح الأحمر والأخضر بطابع فاخر.", image: "/products/19.jpeg" },
];

const charcoal: Product[] = [
  { name: "فحم مكعبات فاخر", description: "حرارة ثابتة واحتراق متوازن لجلسة أطول بطعم أنقى.", image: "/products/24.jpeg" },
  { name: "فحم أرجيلة مختار", description: "مكعبات متماسكة ومناسبة للجلسات اليومية.", image: "/products/20.jpeg" },
];

const hookahs: Product[] = [
  {
    name: "Blue Crystal",
    description: "زجاج أزرق عميق وتفاصيل سوداء تمنح جلستك حضورًا استثنائيًا.",
    image: "/products/08.jpeg",
  },
  {
    name: "Black Gold",
    description: "توليفة الأسود والذهبي بتصميم عملي وحقيبة أنيقة.",
    image: "/products/09.jpeg",
  },
  {
    name: "Ocean Blue",
    description: "هيكل انسيابي بلمسات زرقاء لافتة وقاعدة كريستالية.",
    image: "/products/10.jpeg",
  },
  {
    name: "Copper Classic",
    description: "لون نحاسي دافئ وقاعدة زجاجية منحوتة لعشاق الفخامة الهادئة.",
    image: "/products/20.jpeg",
  },
  {
    name: "Purple Edition",
    description: "تصميم بنفسجي عصري يجمع بين الأداء القوي والمظهر الجريء.",
    image: "/products/22.jpeg",
  },
  {
    name: "Rose Gold",
    description: "ذهبي مصقول مع زجاج وردي وتفاصيل فنية تخطف الأنظار.",
    image: "/products/23.jpeg",
  },
  {
    name: "Dark Crystal",
    description: "قاعدة شفافة وهيكل داكن بتباين أنيق يناسب كل جلسة.",
    image: "/products/24.jpeg",
  },
  {
    name: "Ruby Red",
    description: "لمسات حمراء لامعة وقاعدة مزخرفة لإطلالة نابضة بالحياة.",
    image: "/products/25.jpeg",
  },

  {
    name: "Classic Brass",
    description: "تصميم نحاسي أنيق بقاعدة كريستالية يمنح جلسة راقية تجمع بين الأصالة والفخامة.",
    image: "/products/27.jpeg",
  },
  {
    name: "Falcon Yellow",
    description: "لمسات صفراء جريئة وهيكل أسود فاخر لعشاق التميز والإطلالة العصرية.",
    image: "/products/28.jpeg",
  },
  {
    name: "Golden Heritage",
    description: "نقوش عربية أصيلة وهيكل ذهبي فاخر يمنح جلسة بطابع شرقي مميز.",
    image: "/products/29.jpeg",
  },
  {
    name: "Falcon Gold",
    description: "تصميم فاخر بتفاصيل ذهبية يمنح حضورًا قويًا ويعكس هوية FalconSmoke.",
    image: "/products/30.jpeg",
  },
  {
    name: "Black Crystal Elite",
    description: "لون أسود مطفي مع قاعدة شفافة يمنح مظهرًا راقيًا وأداءً ثابتًا.",
    image: "/products/31.jpeg",
  },
  {
    name: "Royal Horse",
    description: "هيكل مزخرف مع تصميم حصان ذهبي لمحبي القطع الفريدة والملفتة.",
    image: "/products/32.jpeg",
  },
  {
    name: "Golden Prestige",
    description: "تفاصيل ذهبية ونقوش دقيقة تعكس الفخامة الكلاسيكية في كل جلسة.",
    image: "/products/33.jpeg",
  },
  {
    name: "Royal Horse Premium",
    description: "إصدار فاخر يجمع بين التصميم التراثي والأداء الاحترافي.",
    image: "/products/34.jpeg",
  },
  {
    name: "Falcon Signature",
    description: "هيكل نحاسي متناسق مع قاعدة مزخرفة يمنح تجربة متكاملة لعشاق الأرجيلة.",
    image: "/products/35.jpeg",
  },
  {
    name: "Luxury Black",
    description: "مزيج من الأسود والذهبي بتفاصيل أنيقة تمنح حضورًا استثنائيًا.",
    image: "/products/36.jpeg",
  },
  {
    name: "Royal Horse Elite",
    description: "تصميم فاخر بلمسات فنية ونقوش معدنية تعكس جودة التصنيع العالية.",
    image: "/products/37.jpeg",
  },
  {
    name: "Classic Royal",
    description: "تصميم نحاسي كلاسيكي بقاعدة مزخرفة يجمع بين الأناقة والأداء الموثوق.",
    image: "/products/38.jpeg",
  },
];

const accessories: Product[] = [
  { name: "كراون بار بطيخ", description: "نكهة بطيخ منعشة ضمن تصميم مدمج وسهل الحمل.", image: "/products/01.jpeg" },
  { name: "كراون بار مانجا آيس", description: "مانجا استوائية بلمسة باردة وانتعاش واضح.", image: "/products/02.jpeg" },
  { name: "كراون بار كشمش", description: "نكهة كشمش غنية بطابع فاكهي مميز.", image: "/products/03.jpeg" },
  { name: "كراون بار تفاحتين", description: "مذاق التفاحتين الكلاسيكي في تجربة عصرية.", image: "/products/04.jpeg" },
  { name: "كراون بار مانجا", description: "مانجا ناضجة بحلاوة متوازنة ونهاية ناعمة.", image: "/products/05.jpeg" },
  { name: "مزايا ديب كلاود", description: "تشكيلة نكهات متنوعة لمحبي الخيارات العملية.", image: "/products/06.jpeg" },
];

const allProductCount = molasses.length + charcoal.length + hookahs.length + accessories.length;

function ProductCard({ product, index }: { product: Product; index: number }) {
  return (
    <article className="product-card reveal" style={{ "--delay": `${index * 55}ms` } as React.CSSProperties}>
      <a className="product-media" href={wa} target="_blank" rel="noreferrer" aria-label={`اطلب ${product.name} عبر واتساب`}>
        <Image src={product.image} alt={`${product.name} من FalconSmoke`} fill sizes="(max-width: 760px) 92vw, (max-width: 1180px) 45vw, 31vw" />
      </a>
      <div className="product-content">
        <span className="product-index">{String(index + 1).padStart(2, "0")}</span>
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <a className="premium-whatsapp" href={wa} target="_blank" rel="noreferrer" aria-label={`تواصل عبر واتساب بخصوص ${product.name}`}>
          <span>اطلب عبر واتساب</span>
          <WhatsAppIcon />
        </a>
      </div>
    </article>
  );
}

function Collection({ id, eyebrow, title, text, products, compact = false }: { id: string; eyebrow: string; title: string; text: string; products: Product[]; compact?: boolean }) {
  return (
    <section className="collection section-shell" id={id} aria-labelledby={`${id}-title`}>
      <div className="section-heading reveal">
        <span>{eyebrow}</span>
        <h2 id={`${id}-title`}>{title}</h2>
        <p>{text}</p>
      </div>
      <div className={compact ? "product-grid compact" : "product-grid"}>
        {products.map((product, index) => <ProductCard product={product} index={index} key={`${id}-${index}`} />)}
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <main id="top">
      <LuxuryHeader />

      <section className="hero-luxury" aria-labelledby="hero-title">
        <div className="hero-bg" aria-hidden="true">
          <Image src="/products/20.jpeg" alt="" fill priority sizes="100vw" />
        </div>
        <div className="hero-inner section-shell">
          <div className="hero-panel reveal">
            <p className="eyebrow">FalconSmoke · Premium Lifestyle</p>
            <h1 id="hero-title">اخــتيــــارات
               تليق بذوقك</h1>
            <p className="hero-text">معسل ، فحم ثابت، أراجيل فاخرة ومستلزمات التدخين — تجربة كاملة بمكان واحد .</p>
            <div className="hero-actions">
              <a className="primary-cta" href="#molasses">استكشف المنتجات</a>
              <a className="secondary-cta" href={wa} target="_blank" rel="noreferrer"><WhatsAppIcon /> تواصل عبر واتساب</a>
            </div>
          </div>
        </div>
        <div className="hero-scroll" aria-hidden="true"><span /> مرّر للأسفل</div>
      </section>

      <section className="stats-band section-shell" aria-label="إحصائيات FalconSmoke">
        <AnimatedCounter value={allProductCount} suffix="+" label="منتج مختار" />
        <AnimatedCounter value={4} label="أقسام رئيسية" />
        <AnimatedCounter value={100} suffix="%" label="طلب مباشر عبر واتساب" />
      </section>

      <Collection id="molasses" eyebrow="01 · معسل" title="نكهات بطابع فاخر" text="أسماء المعسل مأخوذة من الصور نفسها، مع عرض نظيف يضع المنتج في واجهة راقية وسهلة الطلب." products={molasses} />
      <Collection id="charcoal" eyebrow="02 · فحم" title="حرارة ثابتة لجلسة أطول" text="اختيارات عملية للفحم والمكعبات، مع وصول سريع للتواصل والطلب عبر واتساب." products={charcoal} compact />

      <section className="brand-statement" aria-label="FalconSmoke statement">
        <FalconMark />
        <p>Premium Quality</p>
        <h2>أسود عميق. ذهب هادئ. تجربة لا تحتاج إلى ضجيج.</h2>
      </section>

      <Collection id="hookahs" eyebrow="03 · أراجيل" title="أراجيل فاخرة بلا أسماء موديلات" text="كل قطعة تحمل العنوان المطلوب: أرجيلة فاخرة، مع وصف تسويقي فريد يحافظ على فخامة العرض." products={hookahs} />
      <Collection id="accessories" eyebrow="04 · مستلزمات التدخين" title="تفاصيل تكمل الجلسة" text="مستلزمات مختارة بعرض أنيق، وصور المنتجات الأصلية محفوظة كما هي داخل الموقع." products={accessories} />

      <section className="contact-section section-shell" id="contact" aria-labelledby="contact-title">
        <div className="contact-card reveal">
          <div className="contact-copy">
            <span className="eyebrow">Visit FalconSmoke</span>
            <h2 id="contact-title">تواصل معنا</h2>
            <p>مخيم الشهيد - السوق الجنوبي - تحت عيادة الدكتور أحمد الشلبي - مقابل الفوارس لمواد البناء</p>
            <div className="contact-list">
              <a href="tel:0777961408"><small>Phone</small><b dir="ltr">0777961408</b></a>
              <a href="https://www.facebook.com/profile.php?id=100080169502566&mibextid=wwXIfr&rdid=5Lm7yxEoMPY9FQUd&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1YNwGHTgsS%2F%3Fmibextid%3DwwXIfr#" target="_blank" rel="noreferrer"><small>Facebook</small><b>FalconSmoke</b></a>
              <a href="https://www.instagram.com/falcon_smoke" target="_blank" rel="noreferrer"><small>Instagram</small><b>falcon_smoke</b></a>
            </div>
            <a className="primary-cta contact-cta" href={wa} target="_blank" rel="noreferrer"><WhatsAppIcon /> ابدأ المحادثة الآن</a>
          </div>
          <div className="map-placeholder" role="img" aria-label="Google Maps placeholder for FalconSmoke location">
            <div className="map-glow" />
            <div className="map-line line-a" />
            <div className="map-line line-b" />
            <div className="map-line line-c" />
            <div className="map-pin"><FalconMark small /><b>FalconSmoke</b><span>مخيم الشهيد · السوق الجنوبي</span></div>
            <em>Google Maps</em>
          </div>
        </div>
      </section>

      <footer className="luxury-footer section-shell">
        <BrandSignature />
        <p>منتجات التدخين مخصصة للبالغين فقط (+18)</p>
        <span>© 2026 FalconSmoke</span>
      </footer>

      <a className="floating-whatsapp" href={wa} target="_blank" rel="noreferrer" aria-label="تواصل عبر واتساب"><WhatsAppIcon /></a>
    </main>
  );
}
