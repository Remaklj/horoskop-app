// API klijent za horoskope
export interface HoroscopeData {
  date_range: string;
  current_date: string;
  description: string;
  compatibility: string;
  mood: string;
  color: string;
  lucky_number: string;
  lucky_time: string;
}

type Period = 'today' | 'yesterday' | 'tomorrow';

// Generisani horoskopi za svaki znak
const GENERATED_HOROSCOPES: Record<string, string[]> = {
  aries: [
    'Danas je odličan dan za nove početke! Vaša energija je na vrhuncu i spremni ste da se suočite sa bilo kojim izazovom. Iskoristite ovu pozitivnu vibru za započinjanje projekata koji su vam dugo na umu.',
    'Danas možete očekivati neočekivane poslovne prilike. Budite otvoreni za nove ideje i predloge od saradnika. Vaša hrabrost i odlučnost će vas odvesti daleko.',
    'Dan pred vama donosi dinamičnu energiju i potrebu za akcijom. Možda ćete osetiti poriv da promenite nešto u svom životu - slušajte tu intuiciju!',
  ],
  taurus: [
    'Danas je idealan dan za fokusiranje na finansijsku stabilnost. Vaša prakticnost i strpljenje će vam pomoći da donesete mudre odluke. Možda će vam se ukazati prilika za investiciju.',
    'Uživajte u lepim stvarima danas! Bavite se onim što vam donosi zadovoljstvo i mir. Vaša potreba za udobnošću i sigurnošću biće zadovoljena.',
    'Dan pred vama nudi priliku da učvrstite postojeće odnose. Vaša lojalnost i pouzdanost biće prepoznate i cenjene od strane voljenih osoba.',
  ],
  gemini: [
    'Vaša komunikativnost je danas na vrhuncu! Iskoristite ovaj dan za važne razgovore i povezivanje sa ljudima. Nova poznanstva mogu biti veoma korisna.',
    'Danas će vaša radoznalost dovesti do zanimljivih otkrića. Budite otvoreni za učenje novih stvari i razmenu ideja sa drugim ljudima.',
    'Dan pred vama donosi živahnost i potrebu za raznovrsnošću. Ne bojte se da istražite nove mogućnosti i krenete u više pravaca odjednom!',
  ],
  cancer: [
    'Danas je idealan dan za posvećivanje vremena porodici i domu. Vaša emotivna inteligencija će vam pomoći da razumete potrebe voljenih osoba.',
    'Osećate potrebu za emotivnom sigurnošću danas. Pronađite utočište u onom što vas čini srećnim i okružite se ljudima koji vas vole.',
    'Dan pred vama nudi priliku za dublje emocionalne veze. Budite otvoreni i iskreni sa onima do kojih vam je stalo.',
  ],
  leo: [
    'Vaše samopouzdanje sija danas! Ovo je savršen dan da zakoračite u centar pažnje i pokažete svoje talente. Ljudi će biti impresioniran vašom harizmo.',
    'Danas imate prirodnu sposobnost da inspirišete druge. Vaše vodstvo i kreativnost će biti veoma cenjeni u poslovnom okruženju.',
    'Dan pred vama donosi priliku da sijate! Ne plašite se da pokažete svoj pravi sjaj i da budete centar pažnje.',
  ],
  virgo: [
    'Vaša pažnja na detalje je danas vaš najveći adut. Iskoristite ovaj dan za organizaciju i planiranje. Sve što započnete biće urađeno sa preciznošću.',
    'Danas je idealan dan za rešavanje praktičnih problema. Vaša analitička priroda će vam pomoći da pronađete efikasna rešenja.',
    'Dan pred vama nudi priliku da se fokusirate na zdravlje i dobrobit. Obratite pažnju na svoje potrebe i nemojte zanemariti samonjegu.',
  ],
  libra: [
    'Danas će vaša potreba za harmonijom dovesti do mirnih i prijatnih interakcija. Vaša diplomatska priroda će vam pomoći da rešite moguće konflikte.',
    'Vaš smisao za lepotu i estetiku je danas pojačan. Okružite se lepim stvarima i uživajte u umetnosti i kulturi.',
    'Dan pred vama donosi prilike za nova partnerstva. Vaša sposobnost da vidite sve strane priče će biti od velike koristi.',
  ],
  scorpio: [
    'Danas vaša intuicija radi prekovremeno! Slušajte svoje unutrašnje glasove i budite pažljivi na skrivene poruke oko vas.',
    'Vaša strast i intenzitet su danas na vrhuncu. Iskoristite ovu energiju za duboke transformacije i lične promene.',
    'Dan pred vama nudi priliku za emotivno isceljenje. Budite hrabri i suočite se sa onim što vas muči.',
  ],
  sagittarius: [
    'Vaša avanturistička duša žudi za novim iskustvima danas! Ovo je savršen dan za planiranje putovanja ili započinjanje nove avanture.',
    'Danas će vaš optimizam i entuzijazam biti zarazni. Širite pozitivnu energiju gde god da idete!',
    'Dan pred vama donosi prilike za proširenje horizonata. Učite, istražujte i budite otvoreni za nova filozofska gledišta.',
  ],
  capricorn: [
    'Vaša disciplina i ambicioznost danas će vas približiti ciljevima. Fokusirajte se na dugoročne planove i budite strpljivi.',
    'Danas je idealan dan za profesionalne aktivnosti. Vaš trud i upornost biće primećeni od strane nadređenih.',
    'Dan pred vama nudi priliku da pokažete svoje liderske sposobnosti. Preuzmite odgovornost i vodite svojim primerom.',
  ],
  aquarius: [
    'Vaša originalna perspektiva danas će doneti svež pogled na stare probleme. Ne bojte se da budete drugačiji i inovativni!',
    'Danas je idealan dan za humanitarne aktivnosti. Vaša želja da pomognete drugima će doneti veliko zadovoljstvo.',
    'Dan pred vama donosi prilike za povezivanje sa istomišljenicima. Vaša vizija budućnosti će inspirisati druge.',
  ],
  pisces: [
    'Vaša kreativnost i mašta su danas neograničene! Iskoristite ovu energiju za umetnička ili spiritualna nastojanja.',
    'Danas ćete biti posebno empatični prema drugima. Vaša sposobnost da osetite tuđe emocije će vam pomoći da pružite podršku.',
    'Dan pred vama nudi priliku za duboku spiritualnu povezanost. Meditacija i kontemplacija biće veoma korisne.',
  ],
};

// Pomoćna funkcija za dobijanje nasumičnog horoskopa
function getRandomHoroscope(sign: string): string {
  const horoscopes = GENERATED_HOROSCOPES[sign] || GENERATED_HOROSCOPES.aries;
  const today = new Date().getDate();
  const index = today % horoscopes.length;
  return horoscopes[index];
}

// Pomoćna funkcija za generisanje fallback podataka
function generateFallbackHoroscope(sign: string): HoroscopeData {
  const moods = ['Energičan', 'Miran', 'Optimističan', 'Fokusiran', 'Kreativan', 'Pun nade'];
  const colors = ['Crvena', 'Plava', 'Zelena', 'Žuta', 'Ljubičasta', 'Narandžasta', 'Roze'];
  const compatibleSigns = ['Ovan', 'Bik', 'Blizanci', 'Rak', 'Lav', 'Devica', 'Vaga', 'Škorpija', 'Strelac', 'Jarac', 'Vodolija', 'Ribe'];
  
  const today = new Date();
  const dayOfMonth = today.getDate();
  
  return {
    date_range: 'N/A',
    current_date: today.toLocaleDateString('sr-RS', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    }),
    description: getRandomHoroscope(sign),
    compatibility: compatibleSigns[dayOfMonth % compatibleSigns.length],
    mood: moods[dayOfMonth % moods.length],
    color: colors[dayOfMonth % colors.length],
    lucky_number: String((dayOfMonth % 99) + 1),
    lucky_time: `${(dayOfMonth % 12) + 1}:00`,
  };
}

// Aztro API - besplatan API za horoskope
export async function fetchHoroscope(
  sign: string,
  day: Period = 'today'
): Promise<HoroscopeData> {
  try {
    // Pokušaj prvo da dobiješ podatke od API-ja
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 5000); // 5s timeout

    const response = await fetch(
      `https://aztro.sameerkumar.website/?sign=${sign}&day=${day}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        signal: controller.signal,
      }
    );

    clearTimeout(timeoutId);

    if (!response.ok) {
      throw new Error('Failed to fetch horoscope');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.log('Using generated horoscope (API unavailable):', error);
    // Koristi generisane horoskope ako API ne radi
    return generateFallbackHoroscope(sign);
  }
}

// Nedeljni horoskopi za svaki znak
const WEEKLY_HOROSCOPES: Record<string, string> = {
  aries: 'Ova nedelja donosi dinamičnu energiju i potrebu za akcijom. Očekujte neočekivane poslovne prilike početkom nedelje. Sredinom nedelje fokusirajte se na komunikaciju sa saradnicima. Vikend je idealan za fizičke aktivnosti i provod sa prijateljima.',
  taurus: 'Nedelja pred vama donosi stabilnost i priliku za finansijski napredak. Početak nedelje je idealan za važne poslovne sastanke. Sredinom nedelje posvete vreme sebi i ličnom razvoju. Vikend provedite u miru sa voljenim osobama.',
  gemini: 'Dinamična nedelja puna komunikacije i novih poznanstava! Početak nedelje donosi zanimljive razgovore i razmenu ideja. Sredinom nedelje očekuje vas kratko putovanje ili važna poruka. Vikend iskoristite za učenje novih stvari.',
  cancer: 'Emocionalno ispunjena nedelja pred vama. Početak nedelje fokusirajte na porodične obaveze. Sredinom nedelje bavite se stvarima koje vas čine srećnim. Vikend je idealan za dublje emotivne razgovore sa voljenim osobama.',
  leo: 'Sjajte svojim punim sjajem ove nedelje! Početak nedelje donosi priznanje za vaš trud. Sredinom nedelje vaša kreativnost će biti na vrhuncu. Vikend provedite u zabavi i druženju sa ljudima koji vas cene.',
  virgo: 'Produktivna nedelja pred vama! Početak nedelje je idealan za organizaciju i planiranje. Sredinom nedelje fokusirajte se na detalje važnih projekata. Vikend posvetite zdravlju i dobrobiti.',
  libra: 'Harmonična nedelja puna prijatnih interakcija. Početak nedelje donosi nove društvene prilike. Sredinom nedelje fokusirajte se na balans između posla i privatnog života. Vikend provedite u lepoti i umetnosti.',
  scorpio: 'Intenzivna nedelja puna transformacija. Početak nedelje može doneti važna otkrića. Sredinom nedelje slušajte svoju intuiciju u važnim odlukama. Vikend je idealan za emotivno isceljenje.',
  sagittarius: 'Avanturistična nedelja pred vama! Početak nedelje donosi želju za novim iskustvima. Sredinom nedelje planirajte putovanje ili naučite nešto novo. Vikend provedite u istraživanju novih mogućnosti.',
  capricorn: 'Ambiciozna nedelja puna poslovnih prilika. Početak nedelje fokusirajte na dugoročne ciljeve. Sredinom nedelje vaš trud će biti primećen. Vikend posvetite planiranju budućih projekata.',
  aquarius: 'Inovativna nedelja puna svežih ideja! Početak nedelje donosi originalne pristupe starim problemima. Sredinom nedelje povezujte se sa istomišljenicima. Vikend provedite u humanitarnim aktivnostima.',
  pisces: 'Kreativna i spiritualna nedelja. Početak nedelje je idealan za umetnička nastojanja. Sredinom nedelje vaša empatija će pomoći mnogima. Vikend posvetite meditaciji i unutrašnjem miru.',
};

// Mesečni horoskopi za svaki znak
const MONTHLY_HOROSCOPES: Record<string, string> = {
  aries: 'Ovaj mesec donosi snažnu energiju za nove početke i važne projekte. Prva polovina meseca je idealna za profesionalni razvoj i pokretanje novih inicijativa. Sredinom meseca možete očekivati važne poslovne sastanke. Druga polovina meseca fokusirajte se na odnose - ljubavni život doživljava pozitivan preokret. Kraj meseca donosi finansijske prilike koje ne treba propustiti.',
  taurus: 'Mesec pred vama je period stabilizacije i finansijskog rasta. Prva polovina meseca je idealna za investicije i planiranje budžeta. Sredinom meseca fokusirajte se na unapređenje ličnih veština. Druga polovina meseca donosi harmoniju u odnosima sa voljenim osobama. Kraj meseca je savršen za realizaciju dugoročnih planova.',
  gemini: 'Dinamičan mesec pun komunikacije i novih veza! Prva polovina meseca donosi važne razgovore i poslovne prilike. Sredinom meseca očekuje vas kratko putovanje ili važno saznanje. Druga polovina meseca fokusirajte se na proširenje znanja. Kraj meseca donosi prijatna iznenađenja u socijalnom životu.',
  cancer: 'Emotivno bogat mesec sa fokusom na porodicu i dom. Prva polovina meseca je idealna za renovaciju ili unapređenje životnog prostora. Sredinom meseca posvete vreme emocionalnom isceljenju. Druga polovina meseca donosi dublju povezanost sa voljenim osobama. Kraj meseca je period zahvalnosti i mira.',
  leo: 'Sjajni mesec pun priznanja i uspeha! Prva polovina meseca stavlja vas u centar pažnje - iskoristite to. Sredinom meseca vaša kreativnost dostigne vrhunac. Druga polovina meseca fokusirajte se na ljubavne odnose koji cvatu. Kraj meseca donosi važno profesionalno priznanje.',
  virgo: 'Produktivan mesec sa fokusom na zdrav život i rad. Prva polovina meseca je idealna za organizaciju i sistematizaciju. Sredinom meseca vaša pažnja na detalje će biti veoma cenjena. Druga polovina meseca donosi napredak u karijeri. Kraj meseca posvetite zdravlju i dobrobiti.',
  libra: 'Balansirani mesec pun harmonije i lepote. Prva polovina meseca fokusirajte se na odnose i partnerstva. Sredinom meseca očekuje vas važna odluka o budućnosti. Druga polovina meseca donosi kreativne projekte. Kraj meseca je idealan za umetničko izražavanje.',
  scorpio: 'Transformativni mesec pun dubokih promena. Prva polovina meseca može biti intenzivna ali korisna. Sredinom meseca slušajte svoju intuiciju u važnim odlukama. Druga polovina meseca donosi emotivno isceljenje. Kraj meseca otvara nova poglavlja u životu.',
  sagittarius: 'Avanturistični mesec pun mogućnosti! Prva polovina meseca je idealna za putovanja i učenje. Sredinom meseca proširite svoje horizonte kroz nove kontakte. Druga polovina meseca donosi profesionalne prilike u inostranstvu. Kraj meseca je period rasta i optimizma.',
  capricorn: 'Ambiciozni mesec sa fokusom na karijeru i ciljeve. Prva polovina meseca zahteva disciplinu i fokus. Sredinom meseca vaš trud konačno biva prepoznat. Druga polovina meseca donosi važne profesionalne dogovore. Kraj meseca je period zadovoljstva postignutim rezultatima.',
  aquarius: 'Inovativni mesec pun novih ideja i projekata. Prva polovina meseca je idealna za networking i saradnju. Sredinom meseca vaša originalnost će biti cenjena. Druga polovina meseca fokusirajte se na humanitarne aktivnosti. Kraj meseca donosi važne društvene promene.',
  pisces: 'Spiritualni i kreativan mesec. Prva polovina meseca je idealna za umetnička nastojanja. Sredinom meseca vaša intuicija vodi ka pravih odlukama. Druga polovina meseca donosi emotivnu ispunjenost. Kraj meseca je period zahvalnosti i mira sa sobom.',
};

// Funkcija za dobijanje nedeljnog horoskopa
export async function fetchWeeklyHoroscope(sign: string): Promise<string> {
  return WEEKLY_HOROSCOPES[sign] || WEEKLY_HOROSCOPES.aries;
}

// Funkcija za dobijanje mesečnog horoskopa
export async function fetchMonthlyHoroscope(sign: string): Promise<string> {
  return MONTHLY_HOROSCOPES[sign] || MONTHLY_HOROSCOPES.aries;
}
