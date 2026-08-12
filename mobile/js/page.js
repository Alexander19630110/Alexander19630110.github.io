//12.12.22
// js file
// 
let startPage="",
    traysPage="",
    vaisselle="",
    packPage="",
    reelsPage="",
    itemsListPage=[],
    cardPage="",
    selectedItems={}, 
    previous;
//
startPage=`
<!-- заголовок -->
<div data-role="header" >
<h1>Довідник <br> з упаковки</h1>
</div>
<!-- заголовок финиш -->
<div data-role="main" class="ui-content" >
<hr>
<div class="ui-grid-a">
<div class="ui-block-a">
<h5 style="text-align: center;">Вироби</h5>
<a href="" onclick="javascript:froo2(traysPage)" class="ui-btn ui-corner-all ui-shadow"><img src="pictures/sweet_round_corners.png" style="width:90%" ></a><br>
<!-- <span>Вироби</span> -->
</div>
<div class="ui-block-b">
<h5 style="text-align: center;">Посуд</h5>
<a href="" onclick="javascript:froo2(vaisselle)" class="ui-btn ui-corner-all ui-shadow"><img src="pictures/plates_round_corners.png" style="width:90%" ></a><br>
</div>
</div>
<div class="ui-grid-a">
<div class="ui-block-a">
<h5 style="text-align: center;">Упаковка</h5>
<a href="" onclick="javascript:froo2(packPage)" class="ui-btn ui-corner-all ui-shadow"><img src="pictures/packages_round_corners.png" style="width:90%" ></a><br>
<!-- <span>Упаковка</span> -->
</div>
<div class="ui-block-b">
<h5 style="text-align: center;">Матеріали</h5>
<a href="" onclick="javascript:makeMatList()" class="ui-btn ui-corner-all ui-shadow"><img src="pictures/reels_round_corners.png" style="width:90%" ></a><br>
<!-- <span>Матеріали</span> -->
</div>
</div>
</div>
<div data-role="footer" >
<h5>ТОВ СП Анфол</h5>
</div>
`;
traysPage=`
<!-- заголовок -->
<div data-role="header" >
<h3>Вироби</h3>
</div>
<!-- заголовок финиш -->
<div data-role="main" class="ui-content">
<h5>Замовники:</h5>
<ul data-role="listview" data-inset="true">
<li><a href="#" onclick="javascript: makeItemList('customer', roshen)"><img src="pictures/logo/RoshenLogo.png" alt="Roshen"><h2>ДП КК "Рошен"</h2></a></li>
<li><a href="#" onclick="javascript: makeItemList('customer', izum)"><img src="pictures/logo/izum.png" alt="Roshen Exclusive"><h2>ТОВ "РОШЕН ЕКСКЛЮЗИВ"</h2></a></li>
<li><a href="#" onclick="javascript: makeItemList('customer', malbi)"><img src="pictures/logo/malbi.jpg" alt="Малби"><h2>Малби Фудз</h2></a></li>
<li><a href="#" onclick="javascript: makeItemList('customer', mondeliz)"><img src="pictures/logo/mondelez.png" alt="mondelez"><h2>ПрАТ "Монделис Украина"</h2></a></li>
<li><a href="#" onclick="javascript: makeItemList('customer', svitoch)"><img src="pictures/logo/Svitoch.jpg" alt="nestle"><h2>ПАТ "ЛКФ "Світоч"</h2></a></li>
<li><a href="#" onclick="javascript: makeItemList('customer', vc)"><img src="pictures/logo/logo_vc.gif" alt="Вацак"><h2>ТОВ "Вінницька цукерка"</h2></a></li>
<li><a href="#" onclick="javascript: makeItemList('customer', inkol)"><img src="pictures/logo/inkol_invest.png" alt="ТОВ Інкол Інвест"><h2>ТОВ Інкол Інвест</h2></a></li>
<li><a href="#" onclick="javascript: makeItemList('customer', bucuria)"><img src="pictures/logo/bucuria_logo.jpg" alt="Букурия"><h2>АТ"Букурия"</h2></a></li>
<li><a href="#" onclick="javascript: makeItemList('customer', vatsak)"><img src="pictures/logo/vacak-logo.jpg" alt="Вацак"><h2>ФОП "Вацак Г.А."</h2></a></li>
<li><a href="#" onclick="javascript: makeItemList('customer', sovek)"><img src="pictures/logo/top_logo_sovek.png" alt="ТОВ СовєК"><h2>ТОВ СовєК</h2></a></li>
<li><a href="#" onclick="javascript: makeItemList('customer', olis )"><img src="pictures/logo/olislogo.jpg" alt="Олис"><h2>ООО фирма Олис Лтд</h2></a></li>
<li><a href="#" onclick="javascript: makeItemList('customer', akkarja)"><img src="pictures/logo/akarja.png" alt="Аккаржа плюс"><h2>ТОВ Аккаржа плюс</h2></a></li>
<li><a href="#" onclick="javascript: makeItemList('customer', ecosnack)"><img src="pictures/logo/bobsnail.jpg" alt="Эко Снек"><h2>ТОВ "Эко Снек"</h2></a></li>
<li><a href="#" onclick="javascript: makeItemList('customer', tiras)"><img src="pictures/logo/TIRAS-logo.png" alt="Тірас-12"><h2>ТОВ "Тірас-12"</h2></a></li>
<li><a href="#" onclick="javascript: makeItemList('customer', valley)"><img src="pictures/logo/valley_logo.jpg" alt="Сонячна Долина Трейд"><h2>ТОВ ОДТ Сонячна Долина Трейд</h2></a></li>
<li><a href="#" onclick="javascript: makeItemList('customer', nv)"><img src="pictures/logo/nv.jpeg" alt="«Н-ВМЖК»"><h2>ТОВ «Н-ВМЖК»</h2></a></li>
<li><a href="#" onclick="javascript: makeItemList('customer', mpz)"><img src="pictures/logo/мхп_лого.svg" alt="МПЗ Легко"><h2>Миронівський МПЗ "Легко"</h2></a></li>
<li><a href="#" onclick="javascript: makeItemList('customer', delicia)"><img src="pictures/logo/delicia_logo.jpeg" alt="Деліція"><h2>ПП "Деліція"</h2></a></li>
<li><a href="#" onclick="javascript: makeItemList('customer', ves)"><img src="pictures/logo/ves.png" alt="ТОВ ВЕС"><h2>ТОВ "ВЕС"</h2></a></li>
<li><a href="#" onclick="javascript: makeItemList('customer', med)"><img src="pictures/logo/med_logo.png" alt="Мед Поділля"><h2>ТОВ «СП «Мед Поділля»</h2></a></li>
<li><a href="#" onclick="javascript: makeItemList('customer', vinsnek)"><img src="pictures/logo/sneck.webp" alt="ВІНСНЕК"><h2>ТОВ "ВІНСНЕК"</h2></a></li>
<li><a href="#" onclick="javascript: makeItemList('customer', delta)"><img src="pictures/logo/delta.jpeg" alt="ТД «Дельта»"><h2>«Торгівельний Дім «Дельта»</h2></a></li>
<li><a href="#" onclick="javascript: makeItemList('customer', kriolit)"><img src="pictures/logo/kriolit_logo.png" alt="Криолит-Д"><h2>ООО "Криолит-Д"</h2></a></li>
<li><a href="#" onclick="javascript: makeItemList('customer', fop_yav)"><img src="pictures/logo/yavor.png" alt="ФОП Яворська"><h2>ФОП Яворська I.М.</h2></a></li>
<li><a href="#" onclick="javascript: makeItemList('customer', fop_suh)"><img src="pictures/logo/sukh.png" alt="ФОП Суханова"><h2>ФОП Суханова О.С.</h2></a></li>
<li><a href="#" onclick="javascript: makeItemList('customer', sweet)"><img src="pictures/logo/sweet_country.jpg" alt="Sweet Country"><h2>"Sweet Country" LTD</h2></a></li>
<li><a href="#" onclick="javascript: makeItemList('customer', scu)"><img src="pictures/logo/scu_logo.png" alt="ТОВ СВІТ КОМПАНІ УКРАЇНА"><h2>ТОВ "СВІТ КОМПАНІ УКРАЇНА"</h2></a></li>
<li><a href="#" onclick="javascript: makeItemList('customer', tona)"><img src="pictures/logo/tona.jpeg" alt="Тона ЛТД"><h2>ТОВ фірма "Тона ЛТД"</h2></a></li>

</ul>
</div>
<div data-role="footer" >
<a href="javascript:froo2(startPage)""ui-btn ui-corner-all ui-icon-arrow-l ui-btn-icon-left">На початок</a>
</div>
`;
vaisselle=`
<div data-role="header" >
<h3>Посуд</h3>
</div>
<!-- заголовок финиш -->
<div data-role="main" class="ui-content">
<h5>Продукція:</h5>
<ul data-role="listview" data-inset="true">
<li><a href="#" onclick="javascript: makeItemList('series', 'cup')"><img src="pictures/logo/cups_logo.png" alt="">Стакани</a></li>
<li><a href="#" onclick="javascript: makeItemList('series', 'plate')"><img src="pictures/logo/plastic-plates.jpg" alt="">Тарілки</a></li>
</ul>
</div>
<div data-role="footer" >
<a href="javascript:froo2(startPage)" "ui-btn ui-corner-all ui-icon-arrow-l ui-btn-icon-left">На початок</a>
</div>
`;
packPage=`
<!-- заголовок -->
<div data-role="header" >
<h3>Упаковка</h3>
</div>
<!-- заголовок финиш -->
<div data-role="main" class="ui-content">
<h5>Продукция:</h5>
<ul data-role="listview" data-inset="true">
<li><a href="#pageList" onclick="javascript: makeItemList('series', 'mushroom')"><img src="pictures/logo/mashroom1.jpg" alt="">Упаковка для грибов</a></li>
<li><a href="#pageList" onclick="javascript: makeItemList('series', 'mushroom_hu')"><img src="pictures/logo/mashroom1.jpg" alt="">Упаковка для грибов (Венгрия)</a></li>
<li><a href="#pageList" onclick="javascript: makeItemList('series', 'berry')"><img src="pictures/logo/berry1.jpg" alt="">Упаковка для ягод</a></li>
<li><a href="#pageList" onclick="javascript: makeItemList('series', 'mayonez')"><img src="pictures/logo/mz1.jpg" alt="">Упаковка для майонеза</a></li>
<li><a href="#pageList" onclick="javascript: makeItemList('series', 'mustard')"><img src="pictures/logo/mustard1.jpg" alt="">Упаковка для горчицы</a></li>
<li><a href="#pageList" onclick="javascript: makeItemList('series', 'universal')"><img src="pictures/logo/argon.jpg" alt="">Упаковка универсальная</a></li>
<li><a href="#pageList" onclick="javascript: makeItemList('series', 'milk')"><img src="pictures/logo/stmoloko.jpg" alt="">Упаковка для молочной продукции</a></li>
<li><a href="#pageList" onclick="javascript: makeItemList('series', 'detergents')"><img src="pictures/logo/sthimia.jpg" alt="">Упаковка для бытовой химии</a></li>
<li><a href="#pageList" onclick="javascript: makeItemList('series', 'cake')"><img src="pictures/logo/cake5.jpg" alt="">Упаковка для тортов</a></li>
<li><a href="#pageList" onclick="javascript: makeItemList('series', 'other')"><img src="pictures/logo/strizne.jpg" alt="">Прочая упаковка</a></li>
</ul>
</div>
<div data-role="footer" >
<a href="javascript:froo2(startPage)" "ui-btn ui-corner-all ui-icon-arrow-l ui-btn-icon-left">На початок</a>
</div>
`;

itemsListPage[0]=`
<!-- заголовок -->
<div data-role="header" >
<h5 id="zagolov"></h5>
</div>
<!-- заголовок финиш -->
<div data-role="main" class="ui-content" >
<form class="ui-filterable"><input id="aautocomplete-input" data-type="search" placeholder="Search item..."></form>
<ul data-role="listview" data-inset="true" id="itemList" data-filter="true" data-filter-reveal="false" data-input="#aautocomplete-input">
</ul>
</div>
<div data-role="footer" >
<a href="javascript:froo2(previous)" "ui-btn ui-corner-all ui-icon-arrow-l ui-btn-icon-left">Повернутись</a>
<a href="javascript:froo2(startPage)" "ui-btn ui-corner-all ui-icon-arrow-l ui-btn-icon-left">На початок</a>
</div>
`;
itemsListPage[1]='';
//
cardPage=`
<!-- левая панель -->
<div data-role="panel" id="Panel_dimension">
<h3 id="LWH"></h3>
<p>совместимые по размеру изделия:</p>
<div id="same_dim">
<!-- <p>нет</p> -->
</div>
</div>
<!-- левая панель финиш -->
<!-- правая панель -->
<div data-role="panel" data-position="right" data-swipe-close="false" id="Panel_material">
<h3 id="reelName"></h3>
<p>применимость материала: </p>
<div id="same_mat">
<!-- <p>нет</p> -->
</div>
</div>
<!-- правая панель финиш -->
<!-- заголовок -->
<div data-role="header" >
<!-- кнопка для левая панель -->
<a href="#Panel_dimension" class="ui-btn ui-btn-inline ui-corner-all ui-shadow">Размер</a>
<h5 id="zagolov"></h5>
<!-- кнопка для правая панель -->
<a href="#Panel_material" class="ui-btn ui-btn-inline ui-corner-all ui-shadow">Материал</a>
</div>
<!-- заголовок финиш -->
<div data-role="main" class="ui-content" >
<!-- item card 1      -->
<div class="w3-container" >
<div class="w3-container w3-center">
<h4 id="nazvaIzd"></h4>
</div>
<div class="w3-card-4" style="width:100%">
<img  style="width:100%" id="foto">
<div class="w3-container w3-center">
<p>Исполнения:</p>
<ul data-role="listview" data-inset="true" id="matlist">
<!--      -->
</ul>
</div>
</div>
</div>
<!-- =====================================     -->
<br>
<table class="w3-table-all">
<tr>
<td>Норма расхода, гр</td>
<td class="w3-right-align" id="norm_rashod"></td>
</tr>
<tr>
<td>Расчетный вес, Г</td>
<td class="w3-right-align" id="wes_rasch"></td>
</tr>
<tr>
<td>Номинальный вес, г</td>
<td class="w3-right-align" id="wes_nom"></td>
</tr>
<tr>
<td>Производительность, цикл/мин</td>
<td class="w3-right-align" id="output"></td>
</tr>
<tr>
<td>Упаковка, шт</td>
<td class="w3-right-align" id="upak"></td>
</tr>
</table>
<br>
<!-- =====================================     -->
<!-- block      -->
<div class="ui-grid-b">
<div class="ui-block-a">
<a href="#lo_Popup" data-rel="popup" data-position-to="origin">
<img src="pictures/layouts.svg" style="width:90%;"></a>
<p>Компоновка</p>
<div data-role="popup" id="lo_Popup">
<a href="#page_item" data-rel="back" class="ui-btn ui-corner-all ui-shadow ui-btn-a ui-icon-delete ui-btn-icon-notext ui-btn-right">Close</a><img  style="width:100%;" id="lo">
</div>
</div>
<div class="ui-block-b">
<a href="#doc_Popup" data-rel="popup" data-position-to="origin">
<img src="pictures/documents.svg" style="width:90%;"></a>
<p>Документ</p>
<div data-role="popup" id="doc_Popup">
<a href="#page_item" data-rel="back" class="ui-btn ui-corner-all ui-shadow ui-btn-a ui-icon-delete ui-btn-icon-notext ui-btn-right">Close</a><img  style="width:100%;" id="document">
</div>
</div>
<div class="ui-block-c">
<a href="#drw_Popup" data-rel="popup" data-position-to="origin">
<img src="pictures/dwg.svg" style="width:90%;"></a>
<p>Чертеж</p>
<div data-role="popup" id="drw_Popup">
<a href="#page_item" data-rel="back" class="ui-btn ui-corner-all ui-shadow ui-btn-a ui-icon-delete ui-btn-icon-notext ui-btn-right">Close</a><img style="width:100%;" id="dwg">
</div>
</div>
</div>
<!-- =====================================     -->
</div>
<div data-role="footer" >
<a href="javascript:froo2(itemsListPage[1])" "ui-btn ui-corner-all ui-icon-arrow-l ui-btn-icon-left">Повернутись</a>
<a href="javascript:froo2(startPage)" "ui-btn ui-corner-all ui-icon-arrow-l ui-btn-icon-left">На початок</a>
</div>
`;
reelsPage=`
<!-- заголовок -->
<div data-role="header" >
<h3>Материалы</h3>
</div>
<!-- заголовок финиш -->
<div data-role="main" class="ui-content">
<form class="ui-filterable"><input id="reels-input" data-type="search" placeholder="Search item..."></form>
<ul data-role="listview" data-inset="true" id="matr" data-filter="true" data-filter-reveal="false" data-input="#reels-input">
<!-- <li><a href="#pageList" onclick="javascript: makeItemList('customer', roshen)"><img src="pictures/logo/RoshenLogo.png" alt="Roshen"><h2>ДП КК "Рошен"</h2></a></li> -->
 </ul>
</div>
<div data-role="footer" >
<a href="javascript:froo2(startPage)" "ui-btn ui-corner-all ui-icon-arrow-l ui-btn-icon-left">На початок</a>
</div>

`;
//_____*****_____
document.body.innerHTML=startPage;
$.mobile.initializePage();
//________________
function rememberMe(t, name){
    name=document.body.innerHTML;
    froo2(t);
//    return name;
};
function froo(t){
    previous=document.body.innerHTML;
    document.body.innerHTML=t;
    $.mobile.initializePage();
};
function froo2(t){
    document.body.innerHTML=t;
    $.mobile.initializePage();
};
//функция создания списка изделий для выбранной фабрики   
function makeItemList(prop, val) {
   // makeListEmpty();
  //flag=0;
  let zastavka, inscription;
  if (typeof (val)=="string"){
  switch (val) {
    case 'cup':
   // zastavka='cups_logo.png';
    inscription='Стаканы';
      break; 
    case 'plate':
   // zastavka='plastic-plates.jpg';
      inscription='Тарелки';
      break; 
    case 'mushroom_hu':
   // zastavka='mashroom1.jpg';
      inscription='Упаковка для грибов (Венгрия)';
     break; 
    case 'mushroom':
   // zastavka='mashroom1.jpg';
      inscription='Упаковка для грибов';
     break; 
    case 'berry':
  //  zastavka='berry1.jpg';
      inscription='Упаковка для ягод';
     break; 
    case 'mayonez':
  //  zastavka='mz1.jpg';
      inscription='Упаковка для майонеза';
     break; 
    case 'mustard':
   // zastavka='mustard1.jpg';
      inscription='Упаковка для горчицы';
     break;
    case 'universal':
   // zastavka='argon.jpg';
      inscription='Упаковка универсальная';
     break;   
    case 'milk':
   // zastavka='stmoloko.jpg';
      inscription='Упаковка для молочной продукции';
     break;
    case 'detergents':
   // zastavka='sthimia.jpg';
      inscription='Упаковка для бытовой химии';
     break;
    case 'cake':
    zastavka='cake5.jpg';
      inscription='Упаковка для тортов';
     break;
    case 'other':
    zastavka='strizne.jpg';
      inscription='Прочая упаковка';
     break;
    default: 
    zastavka='No-image-available.jpg';
      inscription='WTF';
  }
  } else if (typeof (val)=="object"){
      zastavka=val.logo;
      inscription=val.fullName;
  } else {alert("wtf");}
  //
  let product;
  selectedItems={};
  for (let i=0; i<allItems.length; i++){


	if (allItems[i].usability == true){
	  
	product=allItems[i].productName;

	if (allItems[i][prop]==val){
	
		if(product in selectedItems){selectedItems[product].push(i);} 
		else {selectedItems[product]=new Array();
			selectedItems[product].push(i);
		};
	};
 
	}
 };
  // загрузить страницу itemsListPage
    froo(itemsListPage[0]);
  //создание нового списка
        let element = document.getElementById("itemList");
        for (key in selectedItems){
  //        console.log(key, selectedItems[key]);
          let element_li = document.createElement("li");
          let element_a=document.createElement("a");
//            element_a.setAttribute("href", "#page_item");
            element_a.setAttribute("onclick", "javascript: cardInfo(" + 0 + ", " + selectedItems[key] + ')');
            let t = document.createTextNode(key);
           element_a.appendChild(t);
          element_li.appendChild(element_a);
          element.appendChild(element_li);
        };
          //отображение наименования заказчика и подсчет количества эдементов
        document.getElementById("zagolov").innerText = inscription;
  // ОБНОВЛЕНИЕ СПИСКА!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
   //*********************** ****** ****** ****** ****** ****** ****** ******
   $( "#itemList" ).listview("refresh");// ****** ****** ****** ****** ******
  // ************************ ***** ****** ****** ****** ****** ****** ******
    itemsListPage[1]=document.body.innerHTML;
   };
    //--------------------------------------end function-----------------------------------------------------------------------------------
  function cardInfo(zer, ...isp){
    //создание карточки изделия
       froo2(cardPage);
       //заголовок страницы
       document.getElementById("zagolov").innerText=allItems[isp[zer]].customer.fullName;
  //название в заголовок 1-й карточки
    document.getElementById("nazvaIzd").innerText=allItems[isp[zer]].productName;
    //картинка изделия
      document.getElementById("foto").setAttribute("src", "pictures/items/" + allItems[isp[zer]].picture);
    //компоновка изделия
    document.getElementById("lo").setAttribute("src", "pictures/lo_picture/" + allItems[isp[zer]].mold.picture_lo);
    document.getElementById("document").setAttribute("src", "pictures/docs/" + allItems[isp[zer]].document);
    document.getElementById("dwg").setAttribute("src", "pictures/drawings/" + allItems[isp[zer]].drawing);
        //исполнения
    document.getElementById("matlist").innerHTML="";
    let element = document.getElementById("matlist");
    for(let i=0; i<isp.length; i++){
      let element_li = document.createElement("li");
      let element_a=document.createElement("a");
      element_a.setAttribute("href", "#page_item");
      element_a.setAttribute("onclick", "javascript: cardInfo(" + i + ", " + isp + ')');
      let t = document.createTextNode(allItems[isp[i]].coil.metod()  );
      element_a.appendChild(t);
      element_li.appendChild(element_a);
    //element_li.appendChild(t);
    element.appendChild(element_li);
    }
        //Заполнение таблицы
    //
    document.getElementById("norm_rashod").innerText = allItems[isp[zer]].sheetRate;
    document.getElementById("wes_rasch").innerText = allItems[isp[zer]].weightRated;
    document.getElementById("wes_nom").innerText = allItems[isp[zer]].weightNominal
    document.getElementById("output").innerText = allItems[isp[zer]].tempo;
    document.getElementById("upak").innerText = allItems[isp[zer]].quantityInBox + "(" + allItems[isp[zer]].box + ")";
    //
    //найти изделия с тем же размером:
    //указать размеры изделия
    document.getElementById("LWH").innerText = allItems[isp[zer]].gabarit;
    // что ищем ? mold
    mld=allItems[isp[zer]].mold;
    //leftPanelElem это имя элемента div, в который будем дописывать изделия с тем же размером 
    // setOfDim это набор в который будем добавлять найденные записи. 
    //Set не допустит дублирования одинаковых названий
    let leftPanelElem=document.getElementById("same_dim"),
    setOfDim = new Set();
    //leftPanelElem.innerHTML="";
    for(let i=0; i<allItems.length; i++){
    if (allItems[i].mold == mld){
    setOfDim.add(allItems[i].productName);
    };
    };
    if(setOfDim.size<2){
      leftPanelElem.innerHTML="<p>нет</p>"
    } else{
      leftPanelElem.innerHTML="";
    for(let imja of setOfDim){
      let elem_p=document.createElement("p");
      let txt2=document.createTextNode(imja);
      elem_p.appendChild(txt2);
      leftPanelElem.appendChild(elem_p);
    };
    };
    // кнопка материалов
    document.getElementById("reelName").innerText = allItems[isp[zer]].coil.metod();
    let rightpanelem=document.getElementById("same_mat");
    rightpanelem.innerHTML="";
    // что ищем ? coil
    let bobine=allItems[isp[zer]].coil;
    for (let i=0; i<allItems.length; i++){
    if (allItems[i].coil==bobine){
    let el_p=document.createElement("p");
    let txt3=document.createTextNode(allItems[i].productName);
    el_p.appendChild(txt3);
    rightpanelem.appendChild(el_p);
    }
    }
    // ОБНОВЛЕНИЕ СПИСКА!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
     //*********************** ****** ****** ****** ****** ****** ****** ******
     $( "#matlist" ).listview("refresh");// ****** ****** ****** ****** ******
    // ************************ ***** ****** ****** ****** ****** ****** ******
    //
    };
    //
function makeMatList(){
  froo2(reelsPage);
  // ф-я создает список материалов - всех применяемых
  document.getElementById("matr").innerHTML="";
  let element=document.getElementById("matr");
    for(key in allReels){
    let mat_li=document.createElement("li");
    let mat_a=document.createElement("a");
    mat_a.setAttribute("href", "#");
    mat_a.setAttribute("onclick", "javascript: fooz(allReels['" + key +  "'])");
    let t = document.createTextNode(allReels[key].metod());
    mat_a.appendChild(t);
    mat_li.appendChild(mat_a);
    element.appendChild(mat_li);
  }
// ОБНОВЛЕНИЕ СПИСКА!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
 //*********************** ****** ****** ****** ****** ****** ****** ******
 $( "#matr" ).listview("refresh");// ****** ****** ****** ****** ******
// ************************ ***** ****** ****** ****** ****** ****** ******
//
//itemsListPage[1]=document.body.innerHTML;
}
//
function fooz(rr){
  //console.log(rr);
  //let product, union;
  //to page itemsListPage[0]
  froo(itemsListPage[0]);
  document.getElementById("itemList").innerHTML="";
  //document.getElementById("zagolovok").innerHTML=rr.metod();
  document.getElementById("zagolov").innerHTML=rr.metod();
  let element = document.getElementById("itemList");
for (let i=0; i<allItems.length; i++){
 // product=allItems[i].productName;
    if(allItems[i].coil==rr){
      let element_li = document.createElement("li");
      let element_a=document.createElement("a");
      let element_h2=document.createElement("h2");
      let element_img=document.createElement("img");
      element_a.setAttribute("href", "#page_item");
      element_a.setAttribute("onclick", "javascript: cardInfo(" + 0 + ", " + i + ')');
      element_img.setAttribute("src", "pictures/logo/"+allItems[i].customer.logo );
      let t = document.createTextNode(allItems[i].productName);
      element_h2.appendChild(t);
      element_a.appendChild(element_img);
      element_a.appendChild(element_h2);
      element_li.appendChild(element_a);
      element.appendChild(element_li);
};
};
// ОБНОВЛЕНИЕ СПИСКА!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
 //*********************** ****** ****** ****** ****** ****** ****** ******
 $( "#itemList" ).listview("refresh");// ****** ****** ****** ****** ******
// ************************ ***** ****** ****** ****** ****** ****** ******
itemsListPage[1]=document.body.innerHTML;
};

    