const tooltipContainerEl = document.getElementById("tooltip-container");
const muscovyQuestionEl = document.getElementById("muscovy-question");
const austriaQuestionEl = document.getElementById("austria-question");
const ottomanQuestionEl = document.getElementById("ottoman-question");
const polandQuestionEl = document.getElementById("poland-question");
const brandenburgQuestionEl = document.getElementById("brandenburg-question");
const denmarkQuestionEl = document.getElementById("denmark-question");
const englandQuestionEl = document.getElementById("england-question");
const franceQuestionEl = document.getElementById("france-question");
const castileQuestionEl = document.getElementById("castile-question");
const muscovyTextContainerEl = document.getElementById("muscovy-text-container");
const austriaTextContainerEl = document.getElementById("austria-text-container");
const ottomanTextContainerEl = document.getElementById("ottoman-text-container");
const polandTextContainerEl = document.getElementById("poland-text-container");
const brandenburgTextContainerEl = document.getElementById("brandenburg-text-container");
const denmarkTextContainerEl = document.getElementById("denmark-text-container");
const englandTextContainerEl = document.getElementById("england-text-container");
const franceTextContainerEl = document.getElementById("france-text-container");
const castileTextContainerEl = document.getElementById("castile-text-container");

/*const example = ["muscovy", "austria"];
for(const x of example){
    let teststring = "asdf"+x;
}*/
const questionArray = [
    questionMuscovy = {
        question: "Who was the ruler of Muscovy from 1462 to 1505 and expanded Muscovy's territory while challenging the authority of the Mongol-Tatar Golden Horde?",
        answer: "Ivan the Great"
    },
    questionDenmark = {
        question: "The Øresund strait, located between Denmark and Sweden,played a significant role in trade and maritime activities during the 15th century. Which toll was established by Denmark to collect revenue from ships passing through the Øresund?",
        answer: "Sound Toll"
    },
    questionEngland = {
        question: "Which conflict in England, spanning from 1455 to 1487, was fought between the rival houses of Lancaster and York for control of the English throne?",
        answer: "Wars of the Roses"
    },
    questionFrance = {
        question: "Who played a significant role in the Hundred Years' War, leading the French forces to several victories before being captured and executed?",
        answer: "Joan of Arc"
    },
    questionCastile = {
        question: "Who completed the Christian reconquest of the Iberian Peninsula by capturing the Emirate of Granada in 1492?",
        answer: "Ferdinand II of Aragon"
    },
    questionBrandenburg = {
        question: "Which ruling dynasty gained control over the Duchy of Brandenburg and established a strong influence in the region?",
        answer: "Hohenzollern"
    },
    questionAustria = {
        question: "Which ruling family consolidated their power in Austria during the 15th century?",
        answer: "Habsburg"
    },
    questionPoland = {
        question: "Which significant event in 1385 led to the personal union between Poland and the Grand Duchy of Lithuania?",
        answer: "Union of Krewo"
    },
    questionOttoman = {
        question: "Which major city did the Ottoman Empire capture in 1453, marking the end of the Byzantine Empire?",
        answer: "Constantinople"
    }
];
const tooltips = [
    {
        tooltipEl: "muscovy-tooltip",
        imageEl: "muscovy-1444-img",
        questionEl: "muscovy-question",
        textContainerEl: "muscovy-text-container",
        questionTitle: "Muscovy",
        questionText: "Who was the ruler of Muscovy from 1462 to 1505 and expanded Muscovy's territory while challenging the authority of the Mongol-Tatar Golden Horde?",
        answers: ["Ivan the Terrible", "Ivan the Great", "Ivan IV"],
        tooltipTitle: "muscovy",
        tooltipText: "In the 15th century, Muscovy (also known as the Grand Duchy of\n" +
            "                Moscow)\n" +
            "                experienced significant political, territorial, and cultural developments. Here are some key events and\n" +
            "                highlights of what happened in Muscovy during that time:<br><br>\n" +
            "\n" +
            "                Rise of Ivan III: Ivan III, also known as Ivan the Great, ruled Muscovy from 1462 to 1505. His reign\n" +
            "                marked a turning point in Muscovite history, as he expanded the territory, consolidated power, and\n" +
            "                challenged the authority of the Mongol-Tatar Golden Horde. <br><br>\n" +
            "\n" +
            "                Consolidation of Territory: Ivan III significantly expanded Muscovy's territory by annexing neighboring\n" +
            "                regions and principalities. Notable acquisitions include Novgorod, Tver, Yaroslavl, and Rostov. These\n" +
            "                territorial gains contributed to the formation of a centralized Muscovite state.<br><br>\n" +
            "\n" +
            "                Assertion of Independence: Muscovy gradually asserted its independence from the Mongol-Tatar Golden\n" +
            "                Horde. Ivan III refused to pay tribute to the Horde and instead adopted the title of \"Sovereign of all\n" +
            "                Rus.\" This move symbolized the growing autonomy and self-identification of Muscovy as the successor of\n" +
            "                the ancient Kievan Rus.<br><br>\n" +
            "\n" +
            "                Moscow as the Capital: Moscow emerged as the political and cultural center of Muscovy during the 15th\n" +
            "                century. Ivan III undertook significant construction projects in Moscow, including the expansion of the\n" +
            "                Moscow Kremlin, the construction of the Cathedral of the Annunciation, and the rebuilding of the\n" +
            "                Dormition Cathedral.<br><br>\n" +
            "\n" +
            "                Cultural and Religious Developments: Muscovy experienced a cultural and religious awakening during the\n" +
            "                15th century. Ivan III promoted Byzantine and Orthodox influences in art, architecture, and religious\n" +
            "                practices. He also invited Italian architects, artists, and scholars to Muscovy, contributing to the\n" +
            "                Renaissance influences in the region.<br><br>\n" +
            "\n" +
            "                The Third Rome Doctrine: In the late 15th century, Muscovy developed the idea of the \"Third Rome.\" This\n" +
            "                doctrine asserted that Moscow, as the spiritual and political successor to Rome and Constantinople, was\n" +
            "                the rightful center of Christian civilization.<br><br>\n" +
            "\n" +
            "                Legal Reforms: Ivan III enacted significant legal reforms during his reign, which aimed to consolidate\n" +
            "                and centralize power. He established a unified legal code known as the \"Sudebnik,\" which standardized\n" +
            "                legal procedures and expanded the authority of the central government.<br><br>\n" +
            "\n" +
            "                These developments in Muscovy during the 15th century laid the foundation for the future growth and\n" +
            "                expansion of the Russian state. The consolidation of territory, the assertion of independence, and the\n" +
            "                cultural and religious transformations played a crucial role in shaping Muscovite and later Russian\n" +
            "                history.</p>",
        imageUrl: "rsc/images/1444/muscovy1444.jpg"
    },
    {
        tooltipEl: "denmark-tooltip",
        imageEl: "denmark-1444-img",
        questionEl: "denmark-question",
        textContainerEl: "denmark-text-container",
        questionTitle: "Denmark",
        questionText: "The Øresund strait, located between Denmark and Sweden, played a significant role in trade and maritime activities during the 15th century. Which toll was established by Denmark to collect revenue from ships passing through the Øresund?",
        answers: ["Baltic Levy", "Sound Toll", "Trade Tariff"],
        tooltipTitle: "denmark",
        tooltipText: "In the 15th century, Denmark, under the rule of the Kalmar\n" +
            "                Union, experienced\n" +
            "                several significant events and developments. Here are some key highlights of what happened in Denmark\n" +
            "                during that time:<br><br>\n" +
            "\n" +
            "                Kalmar Union: The Kalmar Union was formed in 1397 and included Denmark, Sweden, and Norway under the\n" +
            "                rule of a single monarch. In the 15th century, Denmark played a dominant role within the union, with\n" +
            "                Danish monarchs often holding the position of the Union King.<br><br>\n" +
            "\n" +
            "                Eric of Pomerania: Eric of Pomerania, who reigned from 1396 to 1439, was a notable Danish king during\n" +
            "                the 15th century. He worked to consolidate the power of the Kalmar Union and initiated administrative\n" +
            "                and legal reforms within Denmark.<br><br>\n" +
            "\n" +
            "                Expansion of Danish Territory: Denmark sought to expand its territory during the 15th century. It\n" +
            "                successfully acquired the territories of Schleswig, Holstein, and Lauenburg, establishing a dominant\n" +
            "                presence in northern Germany.<br><br>\n" +
            "\n" +
            "                Struggles within the Kalmar Union: The Kalmar Union faced internal struggles during the 15th century, as\n" +
            "                each kingdom within the union sought to maintain its independence and assert its interests. Denmark\n" +
            "                clashed with Sweden and Norway over issues such as taxation, trade, and the extent of royal power.\n" +
            "                <br><br>\n" +
            "                The Sound Dues: In the 15th century, Denmark established the Sound Dues, a toll collected from ships\n" +
            "                passing through the Øresund strait. This created a significant source of revenue for the Danish crown\n" +
            "                and helped maintain Denmark's dominance over trade in the Baltic Sea.<br><br>\n" +
            "\n" +
            "                Christian I and the Union of Kalmar: Christian I, who ruled from 1448 to 1481, sought to strengthen the\n" +
            "                Kalmar Union. He attempted to assert his authority over Sweden, which led to a rebellion in 1471 and\n" +
            "                increased tensions within the union.<br><br>\n" +
            "\n" +
            "                Religious Developments: The 15th century saw religious changes in Denmark. The Roman Catholic Church\n" +
            "                remained the dominant institution, but there were also movements that questioned church practices and\n" +
            "                advocated for reform.<br><br>\n" +
            "\n" +
            "                The Sound Toll Register: In 1429, Denmark established the Sound Toll Register, a comprehensive record of\n" +
            "                ships passing through the Øresund. This register provided valuable information on trade and shipping\n" +
            "                activities in the region and became an essential economic resource for Denmark.<br><br>\n" +
            "\n" +
            "                These events and developments in Denmark during the 15th century influenced the country's political\n" +
            "                dynamics, territorial expansion, and trade relationships within the Kalmar Union and the wider Baltic\n" +
            "                region.</p>",
        imageUrl: "rsc/images/1444/denmark1444.jpg"
    },
    {
        tooltipEl: "england-tooltip",
        imageEl: "england-1444-img",
        questionEl: "england-question",
        textContainerEl: "england-text-container",
        questionTitle: "England",
        questionText: "Which conflict in England, spanning from 1455 to 1487, was fought between the rival houses of Lancaster and York for control of the English throne?",
        answers: ["Wars of the Three Kingdoms", "Wars of the Roses and Thistles", "Wars of the Roses"],
        tooltipTitle: "england",
        tooltipText: "The 15th century in England was a period of political and\n" +
            "                social changes,\n" +
            "                marked by significant events and developments. Here are some key highlights of what happened in England\n" +
            "                during that time:<br><br>\n" +
            "\n" +
            "                Wars of the Roses: The 15th century saw the Wars of the Roses, a series of civil wars fought between two\n" +
            "                rival branches of the Plantagenet dynasty, the House of Lancaster and the House of York. These\n" +
            "                conflicts, which began in the 1450s, resulted in a power struggle for the English throne. The wars ended\n" +
            "                in 1485 with the victory of Henry Tudor, who became King Henry VII, establishing the Tudor\n" +
            "                dynasty.<br><br>\n" +
            "\n" +
            "                Hundred Years' War: The 15th century witnessed the final stages of the Hundred Years' War between\n" +
            "                England and France. The war, which had begun in the 14th century, saw England gradually losing its\n" +
            "                territories in France. The conflict officially ended in 1453 with the French victory at the Battle of\n" +
            "                Castillon.<br><br>\n" +
            "\n" +
            "                Henry V: King Henry V, who reigned from 1413 to 1422, was a prominent figure in English history during\n" +
            "                the 15th century. He achieved military successes, including the famous Battle of Agincourt in 1415, and\n" +
            "                temporarily restored English control over parts of France.<br><br>\n" +
            "\n" +
            "                Rise of the Tudor Dynasty: The Tudor dynasty came to power in the late 15th century. Henry Tudor, who\n" +
            "                became Henry VII, won the Battle of Bosworth Field in 1485, effectively ending the Wars of the Roses.\n" +
            "                The Tudor dynasty, which lasted until 1603, brought stability and significant changes to\n" +
            "                England.<br><br>\n" +
            "\n" +
            "                Cultural and Intellectual Developments: The 15th century in England witnessed the flourishing of the\n" +
            "                English Renaissance. Influenced by the Italian Renaissance, there was an increased focus on literature,\n" +
            "                art, and intellectual pursuits. Notable writers and poets of this period include Geoffrey Chaucer,\n" +
            "                Thomas Malory, and John Lydgate.<br><br>\n" +
            "\n" +
            "                Printing Press: The introduction of the printing press to England in the late 15th century\n" +
            "                revolutionized the dissemination of knowledge and played a significant role in the spread of ideas and\n" +
            "                the standardization of the English language.<br><br>\n" +
            "\n" +
            "                Henry VI: The reign of Henry VI, who ruled from 1422 to 1461 and again from 1470 to 1471, was\n" +
            "                characterized by political instability and conflicts, including the Wars of the Roses. His reign saw\n" +
            "                challenges to his authority and power struggles among the nobility.<br><br>\n" +
            "\n" +
            "                These events and developments in England during the 15th century shaped the course of English history\n" +
            "                and set the stage for the dramatic changes and transformations that would occur in the following\n" +
            "                centuries.",
        imageUrl: "rsc/images/1444/england1444.jpg"
    },
    {
        tooltipEl: "france-tooltip",
        imageEl: "france-1444-img",
        questionEl: "france-question",
        textContainerEl: "france-text-container",
        questionTitle: "France",
        questionText: "Who played a significant role in the Hundred Years' War, leading the French forces to several victories before being captured and executed?",
        answers: ["Catherine de' Medici", "Joan of Arc", "Isabella of Castile"],
        tooltipTitle: "france",
        tooltipText: "The 15th century was a transformative period for France, marked\n" +
            "                by significant\n" +
            "                political, cultural, and military events. Here are some key highlights of what happened in France during\n" +
            "                that time:<br><br>\n" +
            "\n" +
            "                Hundred Years' War: The 15th century witnessed the final stages of the Hundred Years' War, a\n" +
            "                long-standing conflict between the Kingdom of England and the Kingdom of France. French forces, led by\n" +
            "                notable figures like Joan of Arc, achieved significant victories, such as the lifting of the Siege of\n" +
            "                Orléans in 1429. This conflict ended with the French reclaiming most of their territories, and the\n" +
            "                Treaty of Picquigny in 1475 brought a temporary peace between the two nations.<br><br>\n" +
            "\n" +
            "                Charles VII and Louis XI: Charles VII succeeded to the French throne in 1422 and played a vital role in\n" +
            "                the recovery of French territories during the Hundred Years' War. His reign also witnessed the trial and\n" +
            "                eventual canonization of Joan of Arc. Following Charles VII, his son Louis XI became king in 1461 and is\n" +
            "                known for centralizing power and expanding the royal domain.<br><br>\n" +
            "\n" +
            "                Renaissance in France: The 15th century marked the beginning of the French Renaissance, characterized by\n" +
            "                a revival of art, literature, and learning inspired by Italian models. The reign of Charles VII and his\n" +
            "                successors saw the patronage of artists, including the poet François Villon and the painter Jean\n" +
            "                Fouquet.<br><br>\n" +
            "\n" +
            "                Burgundian Wars: The Burgundian Wars, a series of conflicts between the Valois monarchy and the Duchy of\n" +
            "                Burgundy, took place throughout the 15th century. These wars were mainly driven by territorial disputes\n" +
            "                and power struggles, involving influential figures such as Philip the Good, Duke of Burgundy, and Louis\n" +
            "                XI of France.<br><br>\n" +
            "\n" +
            "                Treaty of Arras (1435): The Treaty of Arras marked a turning point in the Burgundian Wars. It\n" +
            "                established a temporary alliance between Philip the Good and Charles VII against England, leading to a\n" +
            "                truce in the larger conflict.<br><br>\n" +
            "\n" +
            "                The Estates-General: The Estates-General, an assembly representing the three estates (clergy, nobility,\n" +
            "                and commoners), played a significant role in French politics during the 15th century. Its convocation in\n" +
            "                1484 under Louis XI aimed to address financial and political issues within the kingdom.<br><br>\n" +
            "\n" +
            "                Book of Hours and Illuminated Manuscripts: The 15th century saw the production of many exquisite\n" +
            "                illuminated manuscripts in France, including the famous Très Riches Heures du Duc de Berry, a lavishly\n" +
            "                illustrated book of hours commissioned by John, Duke of Berry.<br><br>\n" +
            "\n" +
            "                These events and developments shaped the political landscape, cultural achievements, and the trajectory\n" +
            "                of France during the 15th century, laying the foundation for future transformations in the country's\n" +
            "                history.",
        imageUrl: "rsc/images/1444/france1444.jpg"
    },
    {
        tooltipEl: "castile-tooltip",
        imageEl: "castile-1444-img",
        questionEl: "castile-question",
        textContainerEl: "castile-text-container",
        questionTitle: "Castile",
        questionText: "Who completed the Christian reconquest of the Iberian Peninsula by capturing the Emirate of Granada in 1492?",
        answers: ["Ferdinand II of Aragon", "Isabella I of Castile", "Philip II"],
        tooltipTitle: "castile",
        tooltipText: "The 15th century was a crucial period for the Kingdom of\n" +
            "                Castile, which was\n" +
            "                part of the medieval Christian realms on the Iberian Peninsula. Here are some significant events and\n" +
            "                developments that took place in Castile during that time:<br><br>\n" +
            "\n" +
            "                Reign of Henry IV: At the beginning of the century, Henry IV ascended to the throne of Castile in 1454.\n" +
            "                His reign was marked by political instability and conflicts within the nobility, including disputes over\n" +
            "                the succession to the throne.<br><br>\n" +
            "\n" +
            "                War of the Castilian Succession: The War of the Castilian Succession erupted in the mid-15th century as\n" +
            "                a result of the contested legitimacy of Henry IV's daughter, Joanna la Beltraneja, as the heir to the\n" +
            "                throne. This conflict pitted Joanna's supporters against those of Henry's half-sister, Isabella of\n" +
            "                Castile, and her husband, Ferdinand of Aragon.<br><br>\n" +
            "\n" +
            "                Marriage of Isabella and Ferdinand: In 1469, Isabella of Castile married Ferdinand of Aragon, uniting\n" +
            "                two of the most powerful kingdoms on the Iberian Peninsula. This marriage eventually led to the creation\n" +
            "                of a united Spain and had far-reaching consequences for Castile and its future.<br><br>\n" +
            "\n" +
            "                Completion of the Reconquista: The 15th century witnessed the final stages of the Reconquista, the\n" +
            "                centuries-long Christian reconquest of the Iberian Peninsula from Muslim rule. Castile played a\n" +
            "                significant role in this process and successfully completed the Reconquista with the capture of the\n" +
            "                Emirate of Granada in 1492.<br><br>\n" +
            "\n" +
            "                Christopher Columbus: Castile sponsored the famous voyages of Christopher Columbus, which led to the\n" +
            "                exploration and colonization of the Americas. In 1492, Columbus, under the patronage of Isabella and\n" +
            "                Ferdinand, set sail from Spain and reached the Caribbean, initiating a new era of European overseas\n" +
            "                expansion.<br><br>\n" +
            "\n" +
            "                Spanish Inquisition: In 1478, the Catholic Monarchs (Isabella and Ferdinand) established the Spanish\n" +
            "                Inquisition, a tribunal tasked with maintaining religious orthodoxy and eliminating heresy. The\n" +
            "                Inquisition had a significant impact on religious and social life in Castile, leading to the persecution\n" +
            "                and expulsion of religious minorities.<br><br>\n" +
            "\n" +
            "                Expulsion of Jews and Muslims: In 1492, as part of their efforts to establish religious homogeneity,\n" +
            "                Isabella and Ferdinand issued the Edict of Expulsion, which ordered the expulsion of Jews from Castile.\n" +
            "                This event had a profound effect on the cultural and economic life of the kingdom.<br><br>\n" +
            "\n" +
            "                These events and developments in Castile during the 15th century laid the foundation for the\n" +
            "                consolidation of power, exploration, and colonization, ultimately leading to the rise of Spain as a\n" +
            "                dominant European power in the following centuries.",
        imageUrl: "rsc/images/1444/castile1444.jpg"
    },
    {
        tooltipEl: "brandenburg-tooltip",
        imageEl: "brandenburg-1444-img",
        questionEl: "brandenburg-question",
        textContainerEl: "brandenburg-text-container",
        questionTitle: "Brandenburg",
        questionText: "Which ruling dynasty gained control over the Duchy of Brandenburg and established a strong influence in the region?",
        answers: ["Habsburg", "Hohenzollern", "Bourbon"],
        tooltipTitle: "brandenburg",
        tooltipText: "In the 15th century, the Duchy of Brandenburg, located in\n" +
            "                what is now\n" +
            "                northeastern Germany, experienced significant political and territorial developments. Here are some key\n" +
            "                events and developments that took place in the Duchy of Brandenburg during that time:<br><br>\n" +
            "\n" +
            "                Hohenzollern Dynasty: The 15th century marked the rise of the Hohenzollern dynasty in Brandenburg. The\n" +
            "                dynasty, originally from Franconia, gradually expanded its influence and control over the region. The\n" +
            "                Hohenzollerns played a crucial role in shaping the future Kingdom of Prussia.<br><br>\n" +
            "\n" +
            "                Treaty of Cölln (1442): The Treaty of Cölln was signed between the Electorate of Brandenburg, ruled by\n" +
            "                Frederick II of Hohenzollern, and the Margraviate of Brandenburg-Kulmbach. The treaty solidified the\n" +
            "                Hohenzollerns' control over the region and established them as the sole rulers of Brandenburg.<br><br>\n" +
            "\n" +
            "                Expansion and Consolidation: Under the Hohenzollern rulers, Brandenburg expanded its territories during\n" +
            "                the 15th century. The acquisition of lands such as Pomerania, Neumark, and Altmark significantly\n" +
            "                increased the duchy's size and power.<br><br>\n" +
            "\n" +
            "                Brandenburg as an Electorate: In 1415, Brandenburg was elevated to an electorate by Emperor Sigismund,\n" +
            "                granting it additional political and administrative privileges within the Holy Roman Empire.<br><br>\n" +
            "\n" +
            "                Berlin as the Capital: In the late 15th century, the Hohenzollern rulers made Berlin their primary\n" +
            "                residence and began developing it as the capital city of Brandenburg. The expansion and construction of\n" +
            "                notable landmarks, such as the Berlin City Palace, laid the foundation for Berlin's future growth and\n" +
            "                significance.<br><br>\n" +
            "\n" +
            "                The Reformation: The Reformation, led by Martin Luther, had a profound impact on Brandenburg in the 16th\n" +
            "                century. However, its early seeds were sown in the late 15th century. Some Brandenburg rulers, like\n" +
            "                Joachim I and Joachim II, expressed sympathy towards the Reformation, leading to religious tensions\n" +
            "                within the region.<br><br>\n" +
            "\n" +
            "                Territorial Disputes: Brandenburg faced territorial disputes and conflicts with neighboring states\n" +
            "                during the 15th century. These disputes included conflicts with the Teutonic Order over territories in\n" +
            "                Prussia and conflicts with the Kingdom of Poland over control of lands in Pomerania.<br><br>\n" +
            "\n" +
            "                The developments in the Duchy of Brandenburg during the 15th century laid the foundation for the future\n" +
            "                growth and prominence of the region under the Hohenzollern dynasty. It set the stage for the eventual\n" +
            "                establishment of the Kingdom of Prussia and its subsequent role in shaping German history.",
        imageUrl: "rsc/images/1444/brandenburg1444.jpg"
    },
    {
        tooltipEl: "austria-tooltip",
        imageEl: "austria-1444-img",
        questionEl: "austria-question",
        textContainerEl: "austria-text-container",
        questionTitle: "Austria",
        questionText: "Which ruling family consolidated their power in Austria during the 15th century?",
        answers: ["Habsburg", "Wittelsbach", "Hohenzollern"],
        tooltipTitle: "austria",
        tooltipText: "In the 15th century, Austria was part of the Holy Roman\n" +
            "                Empire, which was a complex political entity in Central Europe. Here are some significant events and\n" +
            "                developments that occurred in Austria during that time:<br><br>\n" +
            "\n" +
            "                Habsburg Dynasty: The House of Habsburg, one of Europe's most influential ruling families, played a\n" +
            "                crucial role in Austria's history during the 15th century. The Habsburgs gradually expanded their\n" +
            "                territorial holdings and established their power base in Austria.<br><br>\n" +
            "\n" +
            "                Battle of Nikolsburg (1424): This battle was fought between the forces of the Austrian Duke Albert V and\n" +
            "                the Hussites, followers of the religious reformer Jan Hus. The Hussites emerged victorious, which\n" +
            "                temporarily weakened Habsburg influence in the region.<br><br>\n" +
            "\n" +
            "                Frederick III: Frederick III, a member of the Habsburg family, became the Holy Roman Emperor in 1452. He\n" +
            "                focused on consolidating Habsburg power and promoting the interests of his dynasty.<br><br>\n" +
            "\n" +
            "                Siege of Vienna (1485): Matthias Corvinus, the King of Hungary, laid siege to Vienna in an attempt to\n" +
            "                expand his influence. However, the city successfully defended itself, preserving Habsburg control over\n" +
            "                Austria.<br><br>\n" +
            "\n" +
            "                Maximilian I: Maximilian I, a prominent Habsburg ruler, ascended to the throne in 1493. He pursued an\n" +
            "                ambitious territorial policy and sought to strengthen the position of the Habsburgs within the Holy\n" +
            "                Roman Empire.<br><br>\n" +
            "\n" +
            "                The Court of the Habsburgs: Vienna became a center of Renaissance culture during the 15th century. The\n" +
            "                Habsburg court attracted artists, scholars, and intellectuals, contributing to the city's intellectual\n" +
            "                and artistic development.<br><br>\n" +
            "\n" +
            "                Exploration and Colonization: In the late 15th century, Austrian explorers and navigators, such as Georg\n" +
            "                von Peuerbach and Andreas Baumkircher, made significant contributions to the field of astronomy and\n" +
            "                cartography, expanding knowledge of the world.<br><br>\n" +
            "\n" +
            "                It's worth noting that Austria was also affected by broader European developments, such as the\n" +
            "                Protestant Reformation that emerged in the 16th century, leading to religious tensions and conflicts\n" +
            "                across the continent. However, these events occurred after the 15th century",
        imageUrl: "rsc/images/1444/austria1444.jpg"
    },
    {
        tooltipEl: "poland-tooltip",
        imageEl: "poland-1444-img",
        questionEl: "poland-question",
        textContainerEl: "poland-text-container",
        questionTitle: "Poland",
        questionText: "Which significant event in 1385 led to the personal union between Poland and the Grand Duchy of Lithuania?",
        answers: ["Union of Krewo", "Treaty of Tordesillas", "Golden Bull of 1356"],
        tooltipTitle: "poland",
        tooltipText: "In the 15th century, Poland experienced significant political\n" +
            "                and social\n" +
            "                changes. Here are some key events and developments that occurred in Poland during that time:<br><br>\n" +
            "\n" +
            "                Union of Krewo (1385): While the Union of Krewo technically took place in the late 14th century, its\n" +
            "                consequences had a lasting impact on 15th-century Poland. The union established a personal union between\n" +
            "                Poland and Lithuania, forming the basis of the future Polish-Lithuanian Commonwealth.<br><br>\n" +
            "\n" +
            "                Jagiellonian Dynasty: The 15th century saw the reign of the Jagiellonian dynasty in Poland. This dynasty\n" +
            "                played a crucial role in shaping the country's history during this period. Notable rulers of the dynasty\n" +
            "                include Władysław II Jagiełło (reigned 1386-1434), Władysław III (reigned 1434-1444), and Casimir IV\n" +
            "                (reigned 1447-1492).<br><br>\n" +
            "\n" +
            "                Battle of Grunwald (1410): This significant military engagement took place between the Polish-Lithuanian\n" +
            "                forces and the Teutonic Knights, a powerful military order. The Polish-Lithuanian forces achieved a\n" +
            "                decisive victory, effectively weakening the Teutonic Knights and establishing the Polish-Lithuanian\n" +
            "                alliance as a major power in the region.<br><br>\n" +
            "\n" +
            "                Union of Horodło (1413): The Union of Horodło formalized the legal and religious rights of various\n" +
            "                ethnic and religious communities within the Polish-Lithuanian state. It granted privileges and\n" +
            "                protections to different groups, including Jews, Ruthenians, and Tatars, fostering a diverse and\n" +
            "                multicultural society.<br><br>\n" +
            "\n" +
            "                Council of Constance (1414-1418): Poland was involved in the Council of Constance, a significant church\n" +
            "                council that aimed to resolve the Western Schism and address other ecclesiastical issues. The council\n" +
            "                contributed to the overall religious and political developments of the time.<br><br>\n" +
            "\n" +
            "                Expansion of the Polish-Lithuanian Commonwealth: Throughout the 15th century, the Polish-Lithuanian\n" +
            "                Commonwealth expanded its territories through military campaigns and political alliances. The\n" +
            "                Commonwealth annexed regions such as Pomerania, Greater Poland, and Mazovia, consolidating its power in\n" +
            "                central and eastern Europe.<br><br>\n" +
            "\n" +
            "                Cultural and Intellectual Developments: The 15th century witnessed a blossoming of culture and learning\n" +
            "                in Poland. The University of Kraków (later renamed Jagiellonian University) was founded in 1364 and\n" +
            "                became an important center of education and intellectual activity.<br><br>\n" +
            "\n" +
            "                Hussite Wars: Poland was indirectly affected by the Hussite Wars, a religious conflict in Bohemia. The\n" +
            "                Jagiellonian dynasty had matrimonial ties with the Hussite movement, and there were occasional\n" +
            "                skirmishes between Polish and Hussite forces near the border regions.<br><br>\n" +
            "\n" +
            "                These events shaped the political landscape, cultural achievements, and the consolidation of power\n" +
            "                within the Polish-Lithuanian Commonwealth in the 15th century, laying the groundwork for future\n" +
            "                developments in the region.",
        imageUrl: "rsc/images/1444/poland1444.jpg"
    },
    {
        tooltipEl: "ottoman-tooltip",
        imageEl: "ottoman-1444-img",
        questionEl: "ottoman-question",
        textContainerEl: "ottoman-text-container",
        questionTitle: "Ottoman",
        questionText: "Which major city did the Ottoman Empire capture in 1453, marking the end of the Byzantine Empire?",
        answers: ["Constantinople", "Istanbul", "Vienna"],
        tooltipTitle: "ottoman",
        tooltipText: "The 15th century was a crucial period for the Ottoman Empire,\n" +
            "                marked by\n" +
            "                significant expansions and important developments. Here are some key events that occurred in the Ottoman\n" +
            "                Empire during that time:<br><br>\n" +
            "\n" +
            "                Conquest of Constantinople (1453): One of the most momentous events of the 15th century was the Ottoman\n" +
            "                conquest of Constantinople, the capital of the Byzantine Empire. Led by Sultan Mehmed the Conqueror, the\n" +
            "                Ottomans captured the city on May 29, 1453, bringing an end to the Byzantine Empire and establishing\n" +
            "                Istanbul (formerly Constantinople) as the new capital of the Ottoman Empire.<br><br>\n" +
            "\n" +
            "                Expansion into the Balkans: In the 15th century, the Ottomans continued their expansion into the\n" +
            "                Balkans, conquering territories previously held by various Balkan states. Significant conquests included\n" +
            "                Serbia (1459), Bosnia (1463), Albania (1478), and parts of Hungary (1526). These expansions established\n" +
            "                the Ottoman Empire as a major power in southeastern Europe.<br><br>\n" +
            "\n" +
            "                Sultan Mehmed the Conqueror: Mehmed II, also known as Mehmed the Conqueror, ruled the Ottoman Empire\n" +
            "                during the mid-15th century. Besides capturing Constantinople, he implemented administrative reforms,\n" +
            "                promoted cultural and intellectual development, and transformed Istanbul into a thriving\n" +
            "                capital.<br><br>\n" +
            "\n" +
            "                Naval Dominance: The Ottoman Empire achieved naval supremacy in the eastern Mediterranean during the\n" +
            "                15th century. The Ottoman fleet, led by admirals like Baltaoglu and Kemal Reis, conducted successful\n" +
            "                campaigns against various Christian maritime powers and secured control over strategic\n" +
            "                waterways.<br><br>\n" +
            "\n" +
            "                Administrative Reforms: Mehmed II initiated significant administrative reforms known as the \"Kanunname,\"\n" +
            "                aimed at centralizing power and consolidating the empire. These reforms standardized taxation,\n" +
            "                established a professional military, and created a hierarchical administrative structure.<br><br>\n" +
            "\n" +
            "                Cultural and Architectural Achievements: The 15th century witnessed a flourishing of Ottoman\n" +
            "                architecture and artistic patronage. Notable architectural projects include the construction of the\n" +
            "                Topkapi Palace, the Grand Bazaar in Istanbul, and the Şehzade Mosque in Edirne.<br><br>\n" +
            "\n" +
            "                Rise of the Janissaries: The Janissaries, an elite infantry corps composed of Christian slave soldiers,\n" +
            "                played a vital role in the expansion and governance of the Ottoman Empire during the 15th century. They\n" +
            "                became a powerful political and military force, but their influence would later pose challenges to the\n" +
            "                empire's stability.<br><br>\n" +
            "\n" +
            "                The 15th century marked a period of territorial expansion, institutional reforms, and cultural\n" +
            "                achievements for the Ottoman Empire, setting the stage for its continued growth and dominance in the\n" +
            "                centuries to come.",
        imageUrl: "rsc/images/1444/ottoman1444.jpg"
    }
]
const countryIcons = [
    {src: "icons/130px-Shield_Muscovy.png"},
    {src: "icons/130px-Shield_Denmark.png"},
    {src: "icons/130px-Shield_England.png"},
    {src: "icons/130px-Shield_France.png"},
    {src: "icons/130px-Shield_Castile.png"},
    {src: "icons/130px-Shield_Brandenburg.png"},
    {src: "icons/130px-Shield_Austria.png"},
    {src: "icons/130px-Shield_Poland.png"},
    {src: "icons/130px-Shield_Ottomans.png"}
];
countryIcons.forEach(iconData => {
    const resultBarEl = document.getElementById("resultBar");
    const iconContainer = document.createElement("icon-container");
    iconContainer.classList.add("icon-container");

    const imgElement = document.createElement("img");
    imgElement.src = iconData.src;
    iconContainer.appendChild(imgElement);
    resultBarEl.appendChild(iconContainer);
});
const mapAreas = [
    {
        coords: "1614,262,1584,286,1543,284,1487,308,1442,288,1430,247,1391,232,1367,257,1394,284,1423,308,1455,325,1462,359,1491,369,1558,359,1584,332,1621,357,1618,383,1670,393,1684,368,1747,381,1765,376,1784,347,1752,330,1764,271,1811,249,1891,257,1899,205,1916,190,1914,142,1825,134,1802,86,1730,66,1648,90,1630,86,1599,96,1579,152,1548,152,1545,191",
        name: "muscovy"
    },
    {
        coords: "759,244,711,266,703,322,737,329,754,342,776,359,799,364,820,356,825,335,843,334,867,337,886,346,901,342,877,318,886,308,920,305,923,293,852,291,828,252,811,249",
        name: "denmark"
    },
    {
        coords: "377,350,416,316,440,355,471,399,474,427,494,425,521,435,504,466,486,479,509,488,481,501,503,538,496,574,477,623,430,632,399,511,360,527,315,533,350,493,384,484,323,471,355,445,342,413,382,411,394,382,371,374,340,376",
        name: "england"
    },
    {
        coords: "503,567,521,551,548,543,606,558,618,611,582,609,572,624,574,658,589,679,608,677,620,695,648,733,591,772,552,785,511,799,442,787,472,746,462,714,440,695,416,655,479,662,465,636,489,624,491,599",
        name: "france"
    },
    {
        coords: "204,776,238,760,260,767,326,764,379,772,416,776,408,808,401,848,410,887,425,920,440,964,415,976,377,959,342,982,313,984,304,1023,286,1021,274,987,247,977,259,921,265,872,279,825,216,825",
        name: "castile"
    },
    {
        coords: "773,434,778,449,803,451,808,432,819,437,825,459,846,461,856,459,858,446,873,444,873,454,888,458,900,464,915,451,912,431,874,429,873,412,851,400,842,417,808,407,795,417,781,425",
        name: "brandenburg"
    },
    {
        coords: "864,577,880,579,888,567,907,560,927,567,946,569,949,591,949,608,934,613,924,649,907,659,890,657,893,677,895,696,869,696,854,704,841,681,847,660,834,652,798,660,773,655,761,642,763,626,783,625,798,632,822,630,846,625,861,615,868,596",
        name: "austria"
    },
    {
        coords: "929,417,922,451,939,473,959,480,976,493,996,507,1013,534,1012,553,1034,549,1069,549,1086,563,1115,566,1125,559,1168,583,1202,627,1207,602,1220,602,1220,585,1244,580,1278,600,1274,578,1271,542,1220,554,1188,531,1163,515,1156,498,1174,458,1132,483,1103,464,1085,442,1102,439,1108,405,1052,427,1029,422,996,432,983,417,946,398",
        name: "poland"
    },
    {
        coords:"1020,875,1049,919,1086,919,1107,939,1120,928,1124,906,1108,880,1120,873,1134,885,1152,890,1144,870,1159,863,1178,858,1203,867,1222,868,1207,887,1217,906,1235,906,1237,933,1237,948,1224,950,1244,963,1246,982,1244,994,1263,995,1279,1007,1293,1007,1302,1023,1324,1019,1337,1019,1346,999,1369,1004,1383,997,1364,985,1369,960,1361,941,1376,931,1405,919,1425,914,1449,934,1473,933,1501,924,1522,943,1551,912,1574,914,1574,897,1549,885,1551,873,1561,878,1554,858,1493,836,1491,858,1408,858,1398,833,1349,851,1308,850,1300,858,1296,882,1254,855,1244,836,1257,822,1256,804,1266,777,1285,768,1285,751,1291,729,1291,719,1303,724,1313,717,1312,704,1273,697,1273,733,1234,744,1215,761,1171,765,1127,758,1108,717,1086,739,1098,765,1115,775,1108,804,1078,817,1049,833,1059,855,1049,867",
        name: "ottoman"
    }
]
const map = document.getElementById("map");
mapAreas.forEach(area => {

    const areaItem = document.createElement("area");
    areaItem.setAttribute("title", area.name)
    areaItem.setAttribute("shape", "poly");
    areaItem.setAttribute("coords", area.coords)
    areaItem.classList.add("country-area");
    map.appendChild(areaItem);
})

const tooltipContainer = document.getElementById("tooltip-container");
const toggleButton = document.getElementById("toggle-button");

toggleButton.addEventListener('click', function () {
    const elements = document.getElementsByClassName("tooltip-contain");
    for (let i = 0; i < elements.length; i++) {
        elements[i].style.display = 'none';
    }
    tooltipContainer.style.display = tooltipContainer.style.display === "none" ? "grid" : "none";
});

const areas = map.getElementsByClassName("country-area");
Array.from(areas).forEach(area => {
    area.addEventListener("click", handleAreaClick);
});

function handleAreaClick(event) {
    const country = event.target.getAttribute("title");
        showTooltip(country);
}

function showTooltip(elementTitle) {
    let element;
    let image;
    let question;
    let textContainer;
    for (let i = 0; i < tooltipContainerEl.childNodes.length; i++) {
        const childNode = tooltipContainerEl.childNodes[i]
        if (childNode.style && childNode.style.display === "grid"){
            childNode.style.display = "none"
        }
    }
    for (let i = 0; i < tooltips.length; i++) {
        if (elementTitle === tooltips[i].tooltipTitle){
            element = document.getElementById(tooltips[i].tooltipEl);
            image = document.getElementById(tooltips[i].imageEl);
            question = document.getElementById(tooltips[i].questionEl);
            textContainer = document.getElementById(tooltips[i].textContainerEl);
        }

    }
    if (textContainer.style.display === "none"){
        switchContent(question,textContainer)
    }

    let x = event.clientX;
    let y = event.clientY;
    tooltipContainerEl.style.display = "grid"
    element.style.display = "grid"
    image.style.display = "revert"
    question.style.display = "none"
    const windowHeight = window.innerHeight;
    const windowWidth = window.innerWidth;
    const tooltipHeight = tooltipContainerEl.offsetHeight;
    const tooltipWidth = tooltipContainerEl.offsetWidth;
    if (x + tooltipWidth > windowWidth) {
        x = windowWidth - (tooltipWidth + 10)
    }
    if (y + tooltipHeight > windowHeight) {
        y = windowHeight - (tooltipHeight + 10)
    }
    tooltipContainerEl.style.left = x + "px";
    tooltipContainerEl.style.top = y + "px";

}

function switchContent(element, switchElement) {
    if (element.style.display === "grid") {
        element.style.display = "none"
        switchElement.style.display = "grid"
    } else {
        element.style.display = "grid"
        switchElement.style.display = "none"
    }
}


