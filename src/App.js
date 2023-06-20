import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Strona w budowie</h1>
        <p>Przydatne linki do  (darmowej) nauki programowania:</p>
        <a href="https://www.kursjs.pl">KursJS (PL)</a>
        <a href="https://developer.mozilla.org/en-US/">MDN (EN)</a>
        <a href="https://www.w3schools.com/html/default.asp">W3Schools (EN)</a>
        <a href="https://www.youtube.com/@Pasjainformatyki/playlists">Pasja Informatyki (PL)</a>
        <br></br>
      <a href="http://lucasklis.github.io"><img
          src="/wBudowie.jpg"
          alt="wBudowie"
          width="auto"
          height="auto"
        /></a>
        <img src="/logo.png" className="App-logo" alt="logo" />
        <h2>Cześć, na stronie docelowo ma się znaleźć to, co przyda się każdej osobie rozpoczynającej swoją podróż z
programowaniem webowm.
<br/>Na początku zawartość strony może być dosyć chaotyczna i przyjmować postać głównie notatek, ale plany są
ambitne i z każdym dniem dodawane będą kolejne treści.
</h2>
<h3>Drogi rekruterze! Nie załamuj się spoglądając na tę stronę : ) Szczególnie w pierwszym etapie będzie ona
zawierać głównie kod html, czyli czystą treść. Na swoim koncie mam już projekty prezentowane dla takich firm,
jak Swarovski, Timberland, Davidoff i wiele innych. Na tej stronie wyglądem zajmę się dopiero na poźniejszym
etapie. Podrzucam do wglądu swoje <a href="Łukasz Kliś CV.pdf ">cv</a> i zachęcam do kontaktu </h3>
<h4>!Zawartość strony bazuje na kursach i poradnikach, które miałem okazję odbyć lub przeklikać. Zdarzy mi się
wykorzystać istniejące elementy graficzne z innych stron, także gdybym drogi autorze naruszył jakieś prawa
autorskie, daj proszę znać i rozwiążemy ten problem, nie chcę po prostu tworzyć koła od początku : )! </h4>
        <h1>Wiedza na start w programowaniu webowym (strona w budowie, ostatni update - 10.06.23)</h1>
<nav>
    <ul>
        <li><a href="#html">HTML</a></li>
        <li><a href="#css">Css</a></li>
        <li><a href="#js">JavaScript</a></li>
        <li><a href="#teoria">Niezbędna teoria</a></li>
        <li><a href="#rozwój">Dalszy rozwój strony</a></li>
        
    </ul>
</nav>
        
        <br></br>
      </header>
      <body>
      <h2 id="html">HTML Cheat Sheet</h2>
      <p><strong>HTML</strong> - Hypertext Markup Language, hipertekstowy język znaczników. Jest to język komputerowy
    opisujący strony internetowe. Obecnie standardem w użyciu jest wersja piąta języka (HTML5)</p>
<p><strong>Hipertekst</strong> to tekst z hiperłączami/linkami do innych stron</p>
<p><strong>Znaczniki</strong> to wyrażenia zamieszczane w ostrych nawiasach <span style={{backgroundColor: 'yellow'}}>dupa</span> </p>
<img src="/Public/znacznik-otwarcia-html1.jpg" alt="znacznik otwarcia" width="400" height="300"/>
<img src="/Public/znacznik-zamkniecia-html.jpg" alt="znacznik zamknięcia" width="400" height="300"/>
<p> <strong> &lt;!DOCTYPE html&gt; </strong>- jest to informacja dla przeglądarki o typie dokumentu</p>
<p> <strong>
        < html>

</html></strong> - to z kolei deklaracja języka, w tym przypadku html. W środku powinnien się znaleźć cały dokument
html. </p>
<p><b> &lt;head&gt;</b> - element opisujący ustawienia dokumentu (to, czego nie widać, co mamy w głowie). </p>
<p><b> &lt;body&gt;</b> - element opisujący treść dokumentu (to, co widać, jak ciało). </p>
<p><b>&lt;meta charset="UTF-8"&gt;</b> - zestaw znaków kodu. Dzięki niemu poprawnie będą wyświetlać się
najpopularniejsze znaki, w tym polskie litery alfabetu. Sam element &lt;meta&gt; będzie wykorzystywany częściej,
ponieważ tworzymy dzięki temu meta tagi, czyli ustawienia strony dla przeglądarki. A jak ustawienia, to będą zawarte
w sekcji &lt;head&gt;. Charset to skrót od "character set", czyli zestawu znaków, natomiast utf-8 to obecnie
najpopularniejszy standard stron internetowych.</p>
<p><b>&lt;h1&gt; - &lt;h6&gt;</b> - nagłówki od największego, do najmniejszego.</p>
<img src="/Public/headings.png" alt="headingi" width="300" height="300"/>
<p><b>&lt;p&gt;</b>- paragrafy/akapity z tekstem </p>
<p><b>&lt;br&gt;</b>- zacznij pisać od nowej linii</p>
<p><b>lorem ipsum</b> - wypełniacz tekstu. W większości edytorów wystarczy zacząć pisać <i>lorem...</i>, kliknąć enter i
gotowe. </p>
<p><b>&lt;adress&gt;&lt;/address&gt;</b>- element address nie ma jakichś szególnych właściwości do edycji, działa przy
edycji jak zwykły paragraf, ale jego zaletą jest ułatwienie pracy przeglądarką, a w szczególności wyszukiwarkom.</p>
<address>Łukasz Kliś <br/>
87-100 Toruń <br/>
I tak dalej...
</address>
<p><strong>niełamliwa/twarda spacja</strong> = & n b s p ; (bez spacji)</p>
<p><strong> lewy znacznik jako string (&lt;)</strong> = & l t ; (ale bez spacji) </p>
<p> <strong> znacznik jako string (&gt;)</strong> = & g t ; (tu też bez spacji)</p>
<p><strong>&lt;hr&gt;</strong>- linia horyzontalna. Towrzy poziomą linię odgradzającą treść </p>
<hr/>
<p><strong>Formatowanie tekstu:</strong></p>
<p><strong>&lt;strong&gt;</strong>- Tekst <strong> uznany za ważny</strong> </p>
<p><b>&lt;b&gt;</b>- Tekst <b>pogrubiony</b></p>
<p><b>&lt;em&gt;</b>- Tekst <em>pochylony o zwiększonym nacisku</em></p>
<p><b>&lt;i&gt;</b>- Tekst <i>pochylony</i></p>
<p><b>&lt;small&gt;</b>- Tekst <small>pomniejszony</small></p>
<p><b>&lt;mark&gt;</b>- Tekst <mark>podświetlony</mark> </p>
<p><b>&lt;sup&gt;</b>- Tekst <sup>jako indeks górny</sup></p>
<p><b>&lt;sub&gt;</b>- Tekst <sub>jako indeks dolny</sub></p>
<p><b>&lt;s&gt;</b>- Tekst <s>przekreślony/nieaktualny</s></p>
<p><b>&lt;ins&gt;</b>- Tekst <ins>wstawiony</ins></p>
<p><b>&lt;del&gt;</b>- Tekst <del>przekreślony/usunięty</del></p>
<p><strong>&lt;ins&gt;</strong>- Tekst <ins>podekreślony/dodany</ins></p>
<h3>Listy html</h3>
<p>Listy nie posiadają własnych tytułów, także trzeba korzystać z wcześniej poznanych nagłówków</p>
<p><strong>&lt;ol&gt;</strong>- Uporządkowana lista, czyli taka, w której punkty są ponumerowane</p>
<p><strong>&lt;li&gt;</strong>- Elememt listy, czyli jeden z punktów listy</p>
<p><strong>&lt;ul&gt;</strong>- Nieuporządkowana lista, czyli lista bez kolejności, zwana równiez wypunktowaną</p>
<p><strong>&lt;dl&gt;</strong>- Definicyjna lista, czyli taka, w której znajdują się dwa rodzaje elementów (&lt;dt&gt;
termin definicji, &lt;dd&gt; sama definicja)</p>
<br/>
<p><strong>&lt;a&gt;</strong>- Link do strony internetowej(ang. anchor). Pomiędzy znacnziki wpisujemy tekst odsyłacza,
który będzie się wyświetlał na ekranie i kierował do docelowej strony. Każdy link musi miec swój atrybut
<i>href</i>. </p>
<p><strong>&lt;href&gt;</strong>- (ang. <i>hypertext reference</i>) Adres linku zapisywany jako atrybut, </p>
<p><strong>&lt;target&gt;</strong>- kolejny atrybut linku, w którym decydujemy gdzie dana strona ma się otworzyć.
Nadając mu wartość _blank otworzy się w konwej karcie, nie ustawiając żadnej lub nadając wartość _self strona
otworzy się w miejsce tej zawierającej link.</p>
<p><strong>&lt;rel&gt;</strong>- atrybut linku <i>relation</i>, może przyjąć dwie wartości : dofollow i nofollow.
Pierwszy jest defaultowy, także nie musimy go zapisywać. Przy drugim mówimy botom wyszukiwarek żeby nie śledziły
tego linka przy zbieraniu danych o stronach internetowych </p>
<p><strong>&lt;#&gt;</strong>- własność atrybutu <i>href</i> przenosząca nas do sekcji tej samej strony. Oczywiście
najpierw musimy stworzyć element o tym samym id, które będziemy wywoływać. Sam krzyżyk (hash tag) przeniesie nas na
tę samą stronę na początek. Link do stron wcześniej w hierarchii zapisujemy za pomocą dwóch kropek. </p>
<p><strong>&lt;Co&gt;</strong>- Co</p>

<p>Adres URL - Uniform Resource Locator, czyli ujednolicony format adresowania zasobów</p>
<p>Adres składa się z:</p>
<ul>
<li>protokołu http lub https, po którym następuje dwukropek i dwa ukośniki (forward slashe)</li>
</ul>
<li><code>lucasklis.github.io</code> host, czyli adres serwera</li>
<li><code>/jakislink</code> i ścieżka dstępu do zasobu</li>
<h3>Protokoły adresu</h3>
<p><b>http</b>- Hypertext Transfer Protocol - protokół do przesyłania stron internetowych </p>
<p><b>https</b>- Hypoertext Transfer Protocol Secure, czyli zabezpieczony protokół do przesyłania stron internetowych
</p>
<p><b>ftp</b>- File Transfer Protocol, czyli protokół do przesyłu plików</p>
<p>Serwer - z ang. <i>host</i>, czyli komputer ze stałym połączeniem sieciowym, na którym znajdują sie dane strony
internetowej.</p>
<p>Hosting - użyczanie miejsca na serwerze. Dostajemy do niego adres i IP </p>
<p>IP - Internet Protocol, czyli ścieżka dostępu do serwera przedstawiona za pomocą cyfr (np. 12.123.321.12)</p>
<p>Domena - nazwa strony bardziej przyjazna dla człowieka niż IP </p>
<p>Subdomena - nazwy podkatalogów dodawane przed domeną</p>
<p> WWW - World Wide Web, czyli ogólnoświatowa sieć. Najpopularniejsza subdomena, której obecnie nie musimy dodawać
dzięki przekieowaniom. Przekierowania te mają za zadanie niwelowanie duplikatów stron (jedna z www, druga bez) i
zapisywane są w pliku .htaccess na serwerze.</p>
<p>Struktura plików - strony internetowe grupujemy w folderach</p>
<p>Friendly URL - usuwanie rozszerzeń adresów i trzymanie się pewnego schematu (jedna strona, jeden folder i w nim plik
główny o nazwie index.html)</p>
<p> Link html - odsyłacze do stron. Linki wewnętrzne prowadzą do jakiejś sekcji na tej samej stronie, albo do podstron,
ale nadal w ramach tej samej domeny. Linki zewnętrzne natomiast prowadzą do stron znajdujących się na innych
domenach.</p>
<p>Każdy element może mieć swój atrybut, który może mieć swoją właśność (property)</p>
<img src="/Public/link-odsylacz.png" alt="link-odsylacz" width="400" height="300"/>
<p>SEO - (ang. <i>Search Engine Optimization </i> optymalizacja strony internetowej pod kątem wyszukiwań.</p>

<h3>Grafika</h3>
<p>Format JPG/JPEG (Joint Photographic Experts Group) to najpopularniejszy format graficzny w sieci. Jest to format tzw.
stratnej kompersji (możemy zmniejszyć wagę pliku kosztem jakości). Sama kompresja polega na zmniejszeniu liczby
kolorów na zdjęciu. Skutkiem ubocznym kompresji czasem stają się artefakty, czyli skupiska pikseli o tych samych
kolorach stworzone przez algorytm kompresji. </p>
<p>Rozdzielczość to rozmiar cyfrowego zdjęcia podana w pikselach, a konkretniej stosunek jej szerokości do wysokości.
Najpopularniejsza rozdzielczość to High Definition (HD), czyli 192px x 1080px. Są jeszcze megapiksele (MP), które są
po prostu wynikiem mnożenia rozdzielczości. Większe zdjęcia są dopasowywane do rozmiarów strony, ale nie zmniejszy
to ich wagi, ponieważ i tak trzeba pobrać całe zdjęcie przed dopasowaniem. </p>
<p>GIF (Graphic Interchange Format) jest również popularnym formatem graficznym, który można kompresować bez straty na
jakości. Gify można animować. </p>
<p>PNG (Portable Network Graphic), kolejny bezstratny format. Największym atutem tego formatu jest przezroczystość
(zapisanie grafik bez tła zwane alpha channel).</p>
<p><strong>&lt;img&gt;</strong>- dodajemy obraz. Potrzebny jest jeszcze atrybut <i>src</i> określający miejsce grafiki
</p>
<p><strong>&lt;width&gt;</strong> atrybut określający szerokość obrazka wyrażana w pikselach.</p>
<p><strong>&lt;height&gt;</strong> atrybut określający wysokość obrazka wyrażana w pikselach. </p>
<p><strong>&lt;alt&gt;</strong> (ang. <i>alternative)</i>atrybut, który jako tekst powinien odwzorować zawartość
zdjęcia. Pokaże się on tylko wtedy, gdy obraz z jakiegoś powodu się nie wyświetli i będzie to jedyne info co w tym
miejscu chcieliśmy pokazać. Przydaje się też robotom indeksującym. </p>
<p><strong>&lt;title&gt;</strong> - tytuł obrazka, który pokaże się po najechaniu na niego kusorem. </p>
<p><strong>&lt;figure&gt;</strong> element do zaznaczenia samodzielnej cześci dopkumentu. </p>
<p><strong>&lt;figcaption&gt;</strong> właściwy opis zdjęcia. </p>

<h3>Tabela</h3>
<p><strong>&lt;table&gt;</strong> tworzymy tabelę html. </p>
<p><strong>&lt;tr&gt;</strong> tworzymy wiersz tabeli html. Możemy dodać argument <i>rowspan</i>, który określi na ile
wierszy rozciągnąć bieżący </p>
<p><strong>&lt;td&gt;</strong> tworzymy komórkę (data) w tabeli html. Możemy dodać argument <i>colspan</i>, który
określi na ile komórek rozciągnąć bieżącą. </p>
<p><strong>&lt;th&gt;</strong> tworzymy nagłówek tabeli html. Warto dodać do niego atrybut <i>scope</i>, który określa
do czego odnosi się nagłówek - zależnie od własności, col to kolumnyk, a row to wiersze.</p>
<p><strong>&lt;thead&gt; &lt;tbody&gt; &lt;tfoot&gt;</strong> - to nic innego jak sekcje tabeli, takie same, jak w samym
dokumencie html. Są opcjonalne. .</p>

<h3> Elementy blokowe i liniowe</h3>
<p>W html możemy wyróżnić te rodzaje elementów. Najprościej, te liniowe nie są takie zachłanne, bo biorą tylko tyle
miejsca, ile potrzebują i nie widzą np. problemu, żeby w tej samej linni znaleźć się z innym elementem liniowym.
Natomiast elementy blokowe zawsze zajmują całą linię i kolejny element będzie wyświetlony poniżej. </p>
<p> Przykładem elementów blokowych może być header, paragraf, lista i jej elementy, natomiast liniowe to link,
pogrubienie, pochylenie, kursywa czy też obraz </p>
<img src="/Public/someLogo.png" width="100" height="100" title="logo v" alt="randomoweLogo"/>

<h3>Klasy i id</h3>
<p><strong>&lt;id&gt;</strong> - identyfikator elementu, nadawany jako jego atrybut. Może służyć również jako selektor
css (wywoływany za pomocą #), o czym dalej.</p>
<p><strong>&lt;class&gt;</strong> - klasa elementu to prawie to samo, co <i>id</i>, ale nadawane grupom. Może służyć
również jako selektor css (wywoływany za pomocą .).</p>
<h3>Sekcje</h3>
<p>Do wersji HTML5 wysztkie sekcje tworzono za pomocą elementu &lt;div&gt;. Wtedy pojawiły się wyodrębnione elementy,
które mają na celu usprawnić pracę zarówno użytkownikom, jak i przeglądarkom. Możemy do nich zaliczyć:</p>
<ul>
<li><b>&lt;article&gt;</b>- niezależna cześć strony, głównie przydatna przy pisaniu blogów</li>
<li><b>&lt;aside&gt;</b> - czyli coś z boku, a w tym wypadku coś poza naszym <i>main</i>, jak np. panel boczny.</li>
<li><b>&lt;footer&gt;</b>- (ang. <i>footer</i>- stopka) sekcja na końcu naszej strony. Często zamieszczamy tam dane
kontaktowe, czy też linki do innych stron</li>
<li><b>&lt;header&gt;</b>- to, co chcemy wyświetlać na górze. Z zasady umieszcza się tam logo i nawigację strony.
</li>
<li><b>&lt;main&gt;</b>- główna treść strony</li>
<li><b>&lt;nav&gt;</b>- nawigacja strony</li>
<li><b>&lt;section&gt;</b>- sekcja ogólnego przeznaczenia, bardzo przydatna do grupowania i utrzymania na stronie
porządku</li>

</ul>
<img src="/Public/layout.png" alt="layout strony"/>
<p><b>Layout</b> to inaczej układ naszej strony. Przedstawiamy go za pomocą sekcji i generlanie ułatwia to grupowanie
elementów.</p>
<p>&lt;div&gt; - (ang. <i>division - sekcja)</i> Najpopularniejszy element blokowy zwany potocznie boxem lub kontenerem.
</p>
<h3>Input/Formularze</h3>
<p>Input (ang. dane wejściowe) to miejsce, gdzie użytkownik może wpisać jakąś wartość. Jest to samozamykający się
element, także nie będzie miał znacznika zamykającego.</p>
<p>Poprawne formowanie wymaga dodania do inputa argumentu <i>type</i> i jego własności, np. najpopularniejsza
<i>text</i>, żeby określić jakiego typu danych przeglądarka ma oczekiwać:</p>
<input type="text"/>
<p>Każda własność odnosi się do jakiegoś tekstu, który można wprowadzić, różnią się między sobą zwykle niuansami, np.
bardziej szczegółowa własność, niż <i>text</i>, to <i>password</i>, która oczekuje podania konkretnie hasła, a
różnica jest taka, że wprowadzane znaki znane są dla maszyny, ale dla użytkownika pokażą się jedynie gwiazdki (ang.
bullety):</p>
<input type="password"/>
<p>Możemy równiez automatycznie określić wartość inputa za pomocą kolejnego argumentu, jakim jest <i>value</i> i tekst
jako jego własność. Po co jednak wpisywać wartość w miejsce, gdzie coś ma wpisać użytkownik? Może to być np. wartość
domyślna lub wskazówka co zapisać w środku. -{`>`} przykład</p>
<p>Możemy również zamknąć możliwość wpisywania jakieś wartości użytkownikowi za pomocą atrybutu <i>disabled</i>. Przyda
się w sytuacji, jak np. wartość zapisał już wcześniej.</p>
<p>Pozostałe typy to: </p>
<ul>
<li>&lt;input type="button"&gt; <input type="button"/></li>
<li>&lt;input type="color"&gt; <input type="color"/></li>
<li>&lt;input type="date"&gt; <input type="date"/></li>
<li>&lt;input type="datetime"&gt; <input type="datetime"/></li>
<li>&lt;input type="DatetimeLocal"&gt; <input type="DatetimeLocal"/></li>
<li>&lt;input type="FileUpload"&gt; <input type="FileUpload"/></li>
<li>&lt;input type="hidden"&gt; <input type="hidden"/></li>
<li>&lt;input type="image"&gt; <input type="image" alt="img"/></li>
<li>&lt;input type="month"&gt; <input type="month"/></li>
<li>&lt;input type="range"&gt; <input type="range"/></li>
<li>&lt;input type="time"&gt; <input type="time"/></li>
<li>&lt;input type="url"&gt; <input type="url"/></li>
<li>&lt;input type="week"&gt; <input type="week"/></li>
<li>&lt;input type="checkbox"&gt; - tu warto dodać <i>label</i>, żeby opisać co będziemy zaznaczać <label><input
        type="checkbox"/>Jestem za odgórnym zakazaniem biedy</label>
<p>Możemy też dodać argumenty <i>checked</i> i <i>disabled</i>:</p>
<label><input type="checkbox" checked disabled/>Miałem wybór</label>
</li>
<br/>
<li>&lt;input type="radio"&gt; - jest to taki przycisk wykluczający, tak więc żeby działał poprawnie trzeba zrobić
conajmniej trzy inputy, którym dodajemy taki sam argumenty <i>name</i>, po którym będzie wiadomo które inputy
należą do grupy wzajemnie się wykluczających:
<br/>
<label><input type="radio" name="example" value="Ciastko"/>Ciastko</label>
<label><input type="radio" name="example" value="Karmel"/>Karmel</label>
<label><input type="radio" name="example" value="CZEKOLAAADA"/>CZEKOLAAADA</label>
</li>
<p>Warto pamiętać, że nadal jest to input, a żadnej wartości użytkownik nie wpisuje, dlatego zaleca się do każdego
radio buttona dopisać argument <i>value</i> o tej samej nazwie, co etykieta, żeby dostarczyć konkretną wartość
</p>
<p>Możemy również dodać argument <i>checked</i> przy jednym z radio buttonów i wtedy będzie on automatycznie
zaznaczony, ale nadal możliwy do zmiany</p>
</ul>
<p><b>Label</b> (ang. etykieta) to opis elementu. Posiada argument <i>for</i>, w którym określamy do jakiego <i>id</i>
się odnosi (czyli musimy wcześniej do naszego inputa dodać argument <i>id</i>). Przy jednym inpucie jeszcze ok, ale
jeśli jest więcej do zrobienia, to zaleca się zagnieżdżenie inputa w labelu, efekt jest ten sam (//pokazać
pisownię):</p>
<label for="price">Cena</label>
<input type="text" id="price"/>
<label>Cena <input type="text"/></label>
<p><b>Placeholder</b>to wyblakłe oznacznie pola w samym polu, które znika wraz z rozpoczęciem wpisywania jakiejś
wartości, zapisywane jako argument inputa. Bzmi dziwnie, ale jak się spojrzy od razu wiadomo o co chodzi:</p>
<input type="text" placeholder="oto nasz placeholder!"/>

<p><b>&lt;Textarea&gt;</b>- to takie miejsce na większą ilość tekstu:</p>
<textarea cols="30" rows="10"></textarea>
<p>Za pomocą argumenty <i>cols</i> możemy określić szerokość obszaru tekstowego, <i>rows</i> użyjemy do długości</p>

<p>&lt;select&gt; - tym elementem dodajemy kilka opcji do wyboru z rozwijanego menu. Opcje określamy elementem
<i>options</i>: </p>
<label for="choice"/>
<i>Wybierz mądrze:</i>
<select name="" id="choice">
<option value="pięty">pięty</option>
<option value="wiadro">wiadro</option>
<option value="siłownik">siłownik</option>
</select>
<p>Przy opcjach należy pamiętać o uzupełnieniu argumentu <i>value</i></p>
<p>Mozemy również ustalić jakąś opcję wybraną domyślnie za pomocą argumentu <i>selected</i></p>
<p>Możemy także umożliwić wybór kilku opcji (trzeba przytrzymać <i>ctrl</i> lub <i>shift</i>) dodając argument
<i>selected</i> do elementu <i>select</i>:</p>
<label for="choice2"></label>
<select name="" id="choice2" multiple>
<option value="jeden">jeden</option>
<option value="dwa">dwa</option>
<option value="czy">czy</option>
<option value="cztery">cztery</option>
<option value="pięć">pięć</option>
</select>
<p>Możemy także grupować opcje za pomocą elementu <i>optgroup</i>:</p>
<label for="choice3"></label>
<select name="" id="choice3">
<optgroup label="Grupa 1">
    <option value="wybór 1">1</option>
    <option value="wybór 2">2</option>
</optgroup>

<optgroup label="Grupa 2">
    <option value="wybór 3">3</option>
    <option value="wybór 4">4</option>
</optgroup>
</select>


<p><b>datalist</b>- dodając ten element pod <i>input</i> możemy dać możliwość wpisania użytkownikowi jakiejkolwiek
wartości, a prócz tego będzie mógł coś wybrać z listy:</p>
<input list="musicans"/>
<datalist id="musicans">
<option value="Behemoth">Behemoth</option>
<option value="Gojira">Gojira</option>
<option value="Static-X">Static-X</option>
<option value="Zenek">Zenek</option>
</datalist>
<p>Do inputa dodajemy argument <i>list</i>z własnością o nazwie jaką chcemy dodać inputowi, natomiast
<i>datalist</i> otrzymuje argument <i>id</i>o tej samej nazwie, co list w inpucie.</p>

<p><b>&lt;fieldset&gt;</b>- to taki zestaw pól w ramce, do którego możemy dodawać inputy. Możemy zagnieździć też
element <i>legend</i> aby dodać tytuł:</p>
<fieldset>
<legend>Tu jest tytuł</legend>
<input type="text"/>
<input type="text"/>
<input type="text"/>
<input type="text"/>
<input type="text"/>
</fieldset>

<p><b>&lt;Form&gt;</b>- tworzenie formularza. Wrzucamy w niego inputy. Dane wyślemy na serer za pomocą inputa
<i>submit</i></p>
<form action="form.php">
<label>Login <input type="text" name="login"/></label>
<label>Password <input type="text" name="password"/></label>
<label>Mail <input type="text" name="mail"/></label>
<label>Register: <input type="submit" value="Send"/></label>

</form>
<p>W formularzu każde pole musi mieć argument <i>name</i>, co pozwoli rozróżnić rodzaj danych. Nazwy nie mogą mieć
odstępów, w razie czego można użyć podkreślnika</p>




<p><b>Komentarze</b>zapisujemy w dwojaki sposób:</p>
<p> w znaczniku z wykrzyknikiem i dwoma myślnikami na początku i dwoma myślnikami na końcu -</p>

<h3>Trochę SEO</h3>

<p>&lt;!DOCTYPE html&gt; - informacja dla przeglądarki jaki rodzaj dokumentu ma przed sobą. Będzie to nasza pierwsza
linijka kodu.</p>
<p>&lt;html lang&gt; - deklaracja języka. Dodajemy do niej wartość konkretnego języka i kraju, np. pl-PL</p>
<p>&lt;meta charset="UTF-8"&gt; - deklaracja zestawu znaków. O ile nie będziemy robić strony internetowej dla
klienta z Dalekiego Wschodu, to zawsze powinna wyglądać tak samo. </p>
<p>&lt;title&gt; - tytuł naszej strony. Widnieje na górze zakładki i w wynikach wyszukiwania. Można nadać kilka
tytułów używając separatorów: - – — · • * | ~ « » {`<>`}. Warto zmieścić się w 65 znakach.</p>
<p> &lt;meta name="description"&gt; - opis strony. Trochę dłuższa forma <i>title</i>. Opis dodajemy za pomocą
atrybutu <i>content</i>. Warto zmieścić się w 160 znakach.</p>
<p>&lt;meta name="keywords" content=""&gt; - jest to meta tag ze słowami kluczowymi. Raczej już się z tego nie
korzysta.</p>
<p>&lt;link&gt; - import zewnętrznych plików. Dodaliśmy już dzięki niemu plik CSS, możemy też dodać <i>favicon</i>,
czyli ikonkę na zakładce wyświetlaną przy tytule strony.</p>

<h2 id="css">CSS Cheat Sheet</h2>

<p><strong>CSS</strong> - (Cascading Style Sheets) arkusze stylów zawierające zasady formatowania strony
internetowej, czyli to jak wygląda.</p>
<p>Reguły/Zasady/Deklaracje CSS zbudowane są z własności(ang. property, czyli co chcemy ostylować) zakończonej
dwokropkiem, następującej po nim wartości (ang. value, czyli jak chcemy coś ostylować) i na końcu średnikiem.
</p>
<p>Wartości moga mieć kilka własności oddzielonych spacją.</p>
<img src="/Public/css-budowa.png" alt="budowa css" width="400" height="300"/>
<p>Reguły CSS wiążemy z konkretnymi elementami za pomocą <i>selektorów</i></p>
<p>Selektorem może być:</p>
<ul>
<li>wcześniej stworzone <i>id</i>elementu, np. <b>#identyfikatorelementu</b></li>
<li>bądź też <i>klasa</i>elementu, np. <b>.nazwaklasy</b></li>
<li>jak równiez i sam element, np. <b>h1</b></li>
<li>a także atrybuty elementów, jak np. kliknięty przycisk (&lt;button clicked&gt;Click&lt;/button&gt;), za
    pomocą nawiasów kwadratowych - <b>[clicked]</b></li>
<li>jest jeszcze gwiazdka, która oznacza, że stylujemy dosłownie każdy element na stronie. Rzadko więc się z
    tego korzysta</li>

</ul>
<p>Klasy nadpisują elementy. Te same selektory są nadpisywane przez późniejszy. Deklaracje <i>liniowe (inline) mają
    większy priorytet (specyficzność), niż w zewnętrzym pliku lub elemencie style </i></p>
<p>Specyficzność CSS - elementy , gwiazdka i pseudo-selektory mają najniższy priorytet, potem są klasy i
pseudo-klasy, potem jest selektor id, a na końcu sylowanie liniowe. </p>
<p>Dziedziczenie CSS - element dzidziczy niektóre stylowanie od rodzica </p>
<p>Kombinatory CSS dają nam możliwość bardziej konkretnie określić o który element nam chodzi. Innymi słowy, łączą
selektor z elementem, w którym się znajdują, czyli te same selektory poza tym elementem nie będą ostylowane.
Robimy to wpisując po prostu w CSS przed stylowany selektor element, w którym jest zawarty i oddzielamy od
selektora spacją </p>
<p>Rodzaje kombinatorów:</p>
<img src="/Public/css-combinators.pdf" alt="kombinatory"/>
<p>Elementy mogą mieć kilka klas, ta wpisana później nadpisuje poprzednią. Możemy też łączyć selektory </p>
<h3>Dodawanie CSS</h3>
<p>Istnieją trzy możliwości:</p>
<ul>
<li>za pomocą tzw. liniowego stylu, czyli umieszczenia atrybutu <i>style</i> bezpośrednio w elemencie html -
    <i>&lt;p style="itutajcss"&gt;</i>. Nie zaleca się korzystania z tego sposobu ze względu na zmniejszanie
    czytelności kodu.</li>
<li>jako samoodzielny element <i>style</i> na końcu sekcji <i>head</i> w pliku html.</li>
<li>jako oddzielny plik CSS. To w większości przypadków najlepsza metoda. Tworzymy nowy plik z końcówką
    <i>.css</i> i umieszczamy w nim wszystko to, co wcześniej mieliśmy w sekcji <i>style</i>, czy samych
    elementach za pomocą liniowego stylowania. Następnie trzeba jeszcze powiedzieć naszej stronie gdzie ma
    szukać swoich styli. Robimy to za pomocą dodanie elementu <i>link</i> do sekcji <i>head</i>: </li>
<p><i>&lt;link rel="stylesheet" href="css/main.css"&gt;</i></p>
<p>Dodaliśmy atrybut <i>rel</i> z własnością <i>stylesheet</i>, co mówi naszej stronie co chcemy jej
    "podlinkować". Drugi element <i>href</i> informuje jak wygląda ścieżka do tego pliku. W powyższym
    przykładzie wskazaliśmy plik <i>css</i> w folderze <i>css</i>.</p>
<p>!Element <i>&lt;link&gt;</i> to nie to samo, co element <i>&lt;a&gt;</i></p>. Ten pierwszy zawsze występuje w
sekcji <i>head</i>, drugi

</ul>
<p>Kolory określamy za pomocą: hexów, dodając krzyżyk (#), po którym wpisujemy kod odpowiedni dla każdego koloru.
</p>
<p><b>Gradienty</b> to płynne przejścia kolorów z jednego w drugi.</p>
<p>Czcionki możemy importować z Google Fonts. Wystarczy wkleić link w nasz plik html w headzie. Dodać taką czcionkę
możemy za pomocą deklaracji <i>font-family: 'itunazwaczcionki', serfif/sans-serif/monospace;</i></p>



<p><b>Box model</b></p>
<p>Każdy element html jest traktowany jako box (pudełko) przez CSS i składa się z 4 częsci:</p>
<ul>
<li><b>content</b> - zawartość elementu</li>
<li><b>padding</b> - (ang. podszycie) wewnętrzna przestrzeń w elemencie pomiędzy zawartością, a granicą (border)
</li>
<li><b>border</b> - otacza element i zaczyna się wraz z końcem paddingu </li>
<li><b>margin </b>- obszar dokoła elementu, tak więc margin jest już poza elementem.</li>
</ul>
<p>Domyślnie <i>body</i> ma zapisany margin: 8px, także jeśli chcielibyśmy poszerzyć nasz element na realnie całą
stronę, musimy zapisać margin body = 0px</p>
<p><b>Zapadanie się maringesów</b> (ang. marign collapsing) - jeśli dwa elementy obok siebie mają maringesy, to
"zapadają" się one w jeden (tylko jeden - ten większy - jest brany pod uwagę) </p>
<img src="/Public/css-margin-collapsing.pdf" alt="margin collapsing"/>
<p><b>skróty właściwości (ang. shorthand properties)</b></p>
<img src="/Public/css-shorthand-properties.pdf" alt="skróty właściwości"/>
<p>Jeśli kiedykolwiek będziesz chciał określić relatywną wysokość elementu względem strony (ile % strony ma zająć
element), to musisz przekazać atrybut <i>height: 100%</i> od <i>body</i>, po sam element.</p>
<p>box-sizing: border-box; - taka własność jest mega popularna i zmienia standardowe dodawanie marginesu i paddingu
do wysokości i szerokości przez nas ustalonych tak, aby wynik wynosił tyle, jakie wartości ustawiliśmy (bez tego
margines i padding zostanie dodany do wysokości i szerokości, którą ustaliliśmy). </p>
<p>Domyślnie <i>div przyjmuje szerokość rodzica, czyli elementu, w którym jest zagnieżdżony.</i></p>
<p>Sekcja <i>body</i> przyjmuje szerokość przeglądarki. Oczywiście możemy ją zmienić za pomocą atrybutu width.
Element blokowy musi mieć treść lub zdefiniowaną szerokość + wysokość żeby poprawnie się wyświetlić.</p>
<p>Czcionki serif mają ładne wykończenia, snas-serif takich nie mają. Te z nazwą <i>monospace</i> mają każdą literę
o tej samej szerokości. <i>Web Safe Fonts</i> wyświetlają się na każdej przeglądarce tak samo.</p>
<p> font-family - rodzina czcionki, np. Arial. Możemy dodać kilka czcionek po sobie, każda kolejna będzie kołem
ratunkowym jeśli będzie coś nie tak z wcześniejszą.</p>
<p>font-size - rozmiar czcionki (rozpiętość pomiędzy znakiem najwyżej i najniżej). Określany za pomocą jednostek
absolutnych: pikseli (px), punktów (pt. 1pt = 1.33px), lub relatywnych: em (1 em przyjmuje wartość 1jednostki
rodzica) i %</p>
<p>text-align - wyrównywanie tekstu </p>
<p>text-transform - zmiana wielkości liter</p>
<p>text-decoration - dekoracja tesktu (podkreślenie, przekreślenie, nadkreślenie)</p>
<p>text-indent - wcięcie tekstu </p>
<p>text-shadow - cień tekstu</p>
<p>letter-spacing - odstępy między literami</p>
<p>word-spacing - odstępu między wyrazami</p>
<p>white-space - (enter, spacja, tabulator)</p>
<p>overflow - wystawanie zawartości poza element</p>

<p><b>display</b> - właściwość zmieniająca zachowanie elementów z blokowego na liniowe lub miksem obydwóch
(<i>inline-block</i>), dzięki czemu elementy mogą występować obok siebie, ale nadal zachowują się jak elementy
blokowe przy określaniu marginesów, paddingu, etc.. <i>Display</i> może też przyjąć wartość <i>none</i> i
element nie będzie wtedy wyświetlony, natomiast pozostałe elementy będą mogły przejąć jego miejsce. To jest
właśnie różnica między bardzo podobną właściwością <i>visibility:hidden</i>, która pozwala zachować elementowi
swoje miejsce.
Warto też zauważyć, że blok zamienia się w linię, to przyjmuje jego właściwości i np. są liczone białe znaki w
kodzie!</p>
<p><b>text-align</b> - wyrównaj tekst do: </p>
<p><b>list-style</b> - edytuj styl listy, np. usuń punktory.</p>
<p><b>calc(x - y)</b>- funkcja CSS, która umożliwia przekazanie obliczeń komputerowi. Są do tego lepsze narzędzia,
ale warto wiedzieć, że coś takiego istnieje.</p>
<p><b>pseudo-klasy</b> - po swoim selektorze dodaj dwukropek i pseudo-klasę, aby móc ostylować specjalny stan
elementu (stylowawnie stanu)</p>
<p><b>pseudo-elementy</b>- dodając dwa dwukropki po selektorze otrzymujemy dostęp do pseudo-elementu, czyli
specjalnej części elementu (stylowanie części)</p>
<p><b>grupowanie zasad</b> - grupujemy za pomocą przecinka </p>
<p>Można zrobić background image w cssie za pomocą <i>url("ścieżka")</i></p>

<h2 id="js">JavaScript</h2>
<p>refresher</p>
<p>let i const to dwa sposoby tworzenia zmiennych. Wcześniej był var, ale nie jest to już zalecana forma zmiennych.
<br/>
let to taki nowy var, zmienna zmienna
<br/>
const natomiast, to zmienna o stałej wartości
</p>
<code className="plaintext">
let myName = 'Luke';
console.log(myName);
myName = 'Manu';
console.log(myName);
</code>
<p>Funkcje strzałkowe - jeden ze sposobów tworzenia funkcji w JS, który rozwiązuje problemy związane z kontekstem
this (this w funkcji strzałkowej zawsze zachowuje swój kontekst), a także znacznie skraca zapis funkcyjny, szczególnie jeśli posiada jednen argument i coś zwraca.
<br></br>
</p>
{/* <code className="plaintext">
const myFnc = () => {}
const printMyName = (name) => {
    console.log(name);
}
printMyName('Luki');
const multiply = number => number * 2
    console.log(multiply(2))
</code> */}
<p>Dzielenie kodu na kilka plików
<br/>
Można pobierać dane z różnych plików, wystarczy je eksportować: 
<br></br>
</p>
{/* <pre>
    <code className="plaintext">
const person = {
    name : 'Luki' 
 }
 export default person
 a następnie importować do docelowego pliku:
 import person from /plikPerson.js (pierwszą nazwę sami wymyślamy i posługujemy się nią w pliku)
 import {kilkaPerson} from /plikPerson.js (importując obiekt musimy wpisać jego nazwę z poprzedniego pliku) 
</p>
&lt;script&gt; let person = {
name : 'Luki' 
}
export default person
</code>
</pre> */}

<p>Klasy to taki szkic obiektu. W obiekcie mogą znaleźć się właściwości i metody, gdzie właściwości to zmienne w klasach, a metody to funkcje w klasach.
<br/> Klasę tworzymy z wykorzystaniem słowa new, np. newPerson, newData, etc.
<br/>Klasy wspierają dziedziczenie (w nowej klasie dziedziczysz inną, zachowując jej właściwości i metody, ale również dodajesz swoje nowe.  ).
</p>

{/* // <script>
// // class Person {
// //     name = 'Max'
// //     call = () => {}
// // }
// class Person {
//     constructor() {
//         this.name = 'Łukasz';
//      }
//      printMyName() {
//          console.log(this.name);
//      }
// }

// let person1 = new Person();
// person1.printMyName();
// </script> */}


<p>operatory spread i rest (...)</p>
<p>destrukturyzacja - wypakuj obiekt lub tablicę i zachowają ją w zmiennej </p>
<p>referncje i typy prymitywne</p>
<p>metody na tablicach</p>
<h2 id="teoria">Niezbędna teoria</h2>

<p><b>Frontend</b>- jedna z dwóch głównych warstw programowania stron internetowych. Jest to tzw. warstwa
użytkownika, czyli to, co użytkownik widzi. Frontend tworzymy za pomocą języków HTML, CSS, JavaScript. </p>
<p><b>JavaScript</b>- skryptowy język programowania nadający m.in. dynamikę naszym stronom. Nasłuchuje czego
potrzebuje użytkownik i reaguje tak, jak to zaprogramowaliśmy.</p>
<p>JavaScript posiada wiele bibliotek, które ułatwiają korzystanie z niego. Jedną z najpopularniejszych jest jQuery,
choć przy tworzeniu nowych stron można powiedzieć, że swoje lata świetności już ma za sobą.</p>

<p><b>Backend</b>- ta niewidoczna warstwa dla użytkownika. Stamtąd np. przeglądarka pobiera różne dane, np. obrazy
na stronę. Przy tworzeniu stron internetowych musimy wszystkie pliki zamieścić na serwerze. Na każde zapytanie
użytkownika serwer odpowiada za pomocą odpowiedzi HTTP.</p>
<p>Kody odpowiedzi HTTP:</p>
<ul>
<li><b>200</b> - wszystko ok</li>
<li><b>403</b>- brak autoryzacji</li>
<li><b>404</b>- podano złą ścieżkę lub strona już nie istnieje na serwerze</li>
<li><b>500</b>- błąd serwera</li>
<li><b>503</b>- błąd serwera</li>
</ul>
<p><b>Bazy danych</b>- są to te same dane, co na serwerze, ale uporządkowane w określony sposób, np. klucz-wartość.
Języki wyciągające te dane nazywa się tymi po stronie serwera (Java, PHP, Python, Ruby, etc.). </p>
<h3>Paradygmaty programowania</h3>
<p>Programowanie imperatywane - mówimy komputerowi co ma robić</p>
<p>Programowanie strukturalne - rodzaj programowania imperatywnego. Kod czytany z góry do dołu. Skupiamy się na
pisaniu funkcji</p>
<p>Programowanie obiektowe - rodzaj programowania imperatywnego. To z czym komputer ma do czynienia to są obiekty,
które mają właściwości i metody. Stan globalny przechowywany jest w obiektach. Klasy definiują zestaw obiektów,
a te prowadzą ze sobą interakcje. Każdy obiekt jest instancją klasy.</p>
<p>Programowanie deklaratywne - nie mówimy co komputer ma zrobić, tylko jaki wynik uzyskać (np. HTML, gdzie nie
mówimy jak komputer ma coś narysować, tylko co chcemy zobaczyc na stronie). Rozszerzenie tego paradygmatu jest
programownie AI i programowanie kwantowe.</p>
<p>Programowanie proceduralne - kod podzielony na procedury wykonuje się krok po kroku. Wraz z powiększaniem się
aplikacji powstaje problem z kontrolą globalnych zmiennych, a konkretnie z ich stanem (stan to wartość zmiennych
używanych podczas jego działania). Stan wraz z rozwojem aplikacji jest zmieniany przez coraz więcej funkcji w
coraz większej ilości miejsc. Rozwiązaniem są kolejne dwa paradygmaty: programowanie funkcyjne i obiektowe.</p>
<p>Programowanie funkcyjne - eliminuje stan globalny i wykorzystuje funkcje, które z kolei albo w ogóle nie
korzystają ze stanu globalnego, albo go nie modyfikują. Jedynym stanem na którym bazują jest ten przekazany do
nich w formie parametrów. Funkcje przenoszą jednej zbiór w drugi korzystając z jakiegoś wzoru. </p>
<p>Prgogramowanie konkatenatywne - coś zaawansowanego</p>
<h3>API</h3>
<p>API - Application Programming Interface, Interfejs Programistyczny Aplikacji to zestaw reguł definiujących w jaki
sposób aplikacje mogą się ze sobą łączyć. API umożliwia jednej aplikacji (nazywanej klientem) korzystać z
zasobów drugiej (nazywanej serwerem).</p>
<p>REST API - to interfejs API zgodny z zasadami REST (representional state transfer). Przy takich interfejsach
można korzystać z prawie każdego języka (na co nie pozwalają inne rodzaje API), a także obsługują wiele formatów
danych. Komunikacja odbywa się za pomocą <strong>żądań HTTP</strong> i za ich pomocą wykonywane są podstawowe
funkcje bez danych, czyli tworzenie (POST), odczytywanie (GET), aktualizowanie (PUT) i usuwanie (DELETE), znane
jako CRUD (create, read, update, delete). Zaletą API REST jest elastyczność </p>
<p>Zasady REST API:</p>
<ul>
<li>Jednolity interfejs - wszystkie żądania do interfejsu dotyczące tego samego zasobu powinny wyglądać tak
    samo. Jeden element = jeden identyfikator URI. Zasoby nie powinny być zbyt duże.</li>
<li>Rozdzielenie klienta i serwera - aplikacje muszą być od siebie niezależne. Klient ma tylko identyfikator
    URI, natomiast serwer wysyła żądane dane za pomocą protokołu HTTP.</li>
<li>Bezstanowość - każde żądanie musi posiadać wszystkie niezbędne informacje do jego przetworzenia (interfejsy
    API REST nie wymagają żadnej sesji po stronie serwera. Serwer nie przechowuje żadnych danych związanych z
    żądaniem klienta.</li>
<li>Możliwość buforowania - buforowanie umożliwia zwiększenie wydajności po stronie klienta przy jednoczesnym
    zwiększeniu skalowalności po stronie serwera.</li>
<li>Warstwowa architektura systemu - w API REST informacje w obie strony przechodzie przez różne warstwy, tak
    więc obie strony z zasady nie łączą się ze sobą bezpośrednio. W API REST żadna ze stron nie może mieć
    informacji czy łączy się z aplikacją końcową czy elementem pośreniczącym. </li>
<li>Kod na żądanie (opcjonalnie) - zwykle przekazuje się dane statyczne, ale jak już mamy do czynienia z kodem
    wykonywalnym, kod powinien byc wykonywany tylko na żądanie.</li>
</ul>
<p>SOAP</p>



















<h2>React</h2>
<p>React to deklaratywna biblioteka (client-side) od Facebooka upraszczająca i przyspieszająca budowanie interfejsów, oparta o wzorce
jednokierunkowego przepływu danych i budowaniu apki w oparciu o komponenty. Jest raczej biblioteką, niż
samodzielnym frameworkiem, ponieważ często korzysta z innych, zewnętrznych bibliotek. Kod w bibliotece jest
deklaratywny
<br/>
React pozwala nam budować tzw. Multi-Page-Applications (widżetowe podejście, czyli korzystamy z Reacta do
stworzenia jednego elementu, komponentu, widżetu) i Single Page Applications (SPA, React odpowiada za całą stronę)
<br/> React to reaktywne komponenty, z których zbudowana jest KAŻDA aplikacja.
<br/> Komponent to reużywalny blok (możesz go wielokrotnie użyć), z którego zbudujesz swoją aplikację. Tworzymy je za pomocą htmla, upiększamy cssem, dodajemy logikę JSem. Pozwala on również na rozłożenie dużych problemów/zadań, na mniejsze części.
<br/> Reaccie mamy podejście deklaratywne (definiujesz co chcesz osiągnąć, porządany stan końcowy), a nie imperatywne, jak ma to miejsce w czystym JavaScripcie. 
<br/> Pierwszy projekt z Reactem - najłatwiej zacząć z narzędziem Create React App, który stworzy zoptymalizxowane środowisko programowania z serwerem, który pozwoli podejrzeć jak aplikacja wygląda.
<br/> Do tego będziemy potrzebowali Node.js
</p>
<ul>
<li>komonenty</li>
<li>eventy i dane</li>
<li>stylowanie</li>
<li>hooki</li>
<li>efejty uboczne i refy</li>
<li>API i Redux</li>
<li>Formsy i requesty http</li>
<li>Routing i Deployment, NextJS</li>
<li>komonenty</li>
</ul>

<h2 id="rozwój">Rozwój strony:</h2>
<ul>
<li>Cheat Sheets Html, Css, Js, Vue</li>
<ul>
    <li>Html how2html</li>
    <li>Html W3Schools</li>
</ul>
<li>Routing</li>
<li>Wybór języka</li>
<li>Nowa domena</li>
<li>Komunikacja chat/komentarze</li>
<li>Artykuły</li>
<li>Bot</li>
<li>Sekcja audio/video</li>
<li>Cykliczny update</li>
<li>skróty klawiszowe  VSC</li>
</ul>
<hr></hr>



    </body>
    </div>
  );
}

export default App;
