//12.12.22
//
var currentInd;
var flag;
//-------------------------------------------------------------------------------------------------------------------------------------
//перезагрузка страницы при клике на Home
//function home(){location.reload();}
//заполнение данных при клике на изделие Коррекс
//-------------------------------------------------------------------------------------------------------------------------------------
//функция создания списка изделий для выбранной фабрики   
function makeItemList(prop, val) {
flag=0;
var zastavka;
var inscription;
if (typeof (val)=="string"){

switch (val) {
  case 'cup':
  zastavka='cups_logo.png';
  inscription='Стаканы';
    break; 
  case 'plate':
  zastavka='plastic-plates.jpg';
    inscription='Тарелки';
    break; 
  case 'mushroom_hu':
  zastavka='mashroom1.jpg';
    inscription='Упаковка для грибов (Венгрия)';
   break; 
  case 'mushroom':
  zastavka='mashroom1.jpg';
    inscription='Упаковка для грибов';
   break; 
  case 'berry':
  zastavka='berry1.jpg';
    inscription='Упаковка для ягод';
   break; 
  case 'mayonez':
  zastavka='mz1.jpg';
    inscription='Упаковка для майонеза';
   break; 
  case 'mustard':
  zastavka='mustard1.jpg';
    inscription='Упаковка для горчицы';
   break;
  case 'universal':
  zastavka='argon.jpg';
    inscription='Упаковка универсальная';
   break;   
  case 'milk':
  zastavka='stmoloko.jpg';
    inscription='Упаковка для молочной продукции';
   break;
  case 'detergents':
  zastavka='sthimia.jpg';
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

document.getElementById("midpart").innerHTML='<img src="pictures/logo/' + zastavka + '" style="width:90%; display: block; margin-right:auto; margin-left: auto; margin-top: 40px">';
document.getElementById("rightpart").innerHTML='';
//
//составление нового списка
//временный массив для списка
var vrem = []; // массив с названиями
var ar=[];
var j=0;
var i;
   for (i = 0; i < allItems.length; i++) {
	 if (allItems[i][prop]==val && allItems[i]["usability"]==true) {
	ar[j]=allItems[i].productName;
 	j=j+1;}
	};
//сортировка по алфавиту временного списка
ar.sort();
// удаляем дублирование
for (i=0; i<ar.length; i++){
	if(vrem.indexOf(ar[i])==-1) {vrem.push(ar[i])}
	}
//отображение наименования заказчика и подсчет количества эдементов
document.getElementById("itemList").innerHTML='<h4>' + inscription + '<//h4><br><h6>Загалом элементів: <span class="badge badge-secondary">' + vrem.length + '<//span><//h6>';
//создание нового списка
var element = document.getElementById("itemList");
//
for (i = 0; i < vrem.length; i++) {
	var ip2=i+2;
  var element_a=document.createElement("A");
  element_a.setAttribute("href", "javascript:makeChoice('"+vrem[i]+ "')"); //clientItem заменено на vrem[i]
  element_a.setAttribute("class", "list-group-item");
//  element_a.setAttribute("class", "rounded");
	element_a.setAttribute("onclick", "change_css("+ip2+")");
  element_a.setAttribute("style", "color: black; font-size: 1.0em");
  var t = document.createTextNode(vrem[i]);//clientItem заменено на vrem[i]
   element_a.appendChild(t);
  element.appendChild(element_a);
};
 };
//--------------------------------------end function-----------------------------------------------------------------------------------
//
//
//--------------------------------------функция выбора изделия-------------------------------------------------------------------------
//
function makeChoice(correks) {
//
	if (flag==0){
	document.getElementById("midpart").innerHTML='<div class="card text-center"> \
<div id="itemName" class="card-header"></div> \
<div class="card-body"> \
<!-- Nav tabs --> \
<ul class="nav nav-tabs" role="tablist"> \
<li class="nav-item"> \
<a class="nav-link active" data-toggle="tab" href="#image">Вигляд</a> \
</li> \
<li class="nav-item"> \
<a class="nav-link" data-toggle="tab" href="#LO">Стіл</a> \
</li> \
<li class="nav-item"> \
<a class="nav-link" data-toggle="tab" href="#dwg">Креслення</a> \
</li> \
</ul> \
<!-- Tab panes --> \
<div class="tab-content"> \
<!-- insert picture  --> \
<div id="image" class="container tab-pane active"><br> \
</div> \
<!-- picture ends  --> \
<!-- insert layout  --> \
<div id="LO" class="container tab-pane fade"><br> \
</div> \
<!-- layout ends  --> \
<!-- insert drawing  --> \
<div id="dwg" class="container tab-pane fade"><br> \
</div> \
<!-- drawing ends  --> \
</div> \
</div> \
<div id="currentmat" class="card-footer"> \
<br> \
</div> \
<div id="variant" > \
</div> \
</div>';
	document.getElementById("rightpart").innerHTML= 
'<!-- Nav tabs --> \
<ul class="nav nav-tabs" role="tablist"> \
<li class="nav-item"><a class="nav-link active" data-toggle="tab" href="#prodInfo">Опис</a></li> \
<li class="nav-item"><a class="nav-link" data-toggle="tab" href="#listSameDim">Розмір</a></li> \
<li class="nav-item"><a class="nav-link" data-toggle="tab" href="#listSameMat">Матеріал</a></li> \
</ul> \
<!-- Tab panes --> \
<div class="tab-content"> \
<div id="prodInfo" class="container tab-pane active"><br> \
<!-- insert pruduction information  --> \
<table class="table"> \
<tbody id="description"> \
<tr><td>Замовник</td><td id="zak"></td></tr> \
<tr><td>Код</td><td id="kodizd"></td></tr> \
<tr><td>Обладнання</td><td id="oborud"></td></tr> \
<tr><td>Назва</td><td id="nazba"></td></tr> \
<tr><td>Розміри, мм</td><td id="razm"></td></tr> \
<tr><td>Матеріал</td><td id="mtl"></td></tr> \
<tr><td>Колір</td><td id="colir"></td></tr> \
<tr><td>Ширина, мм</td><td id="wdth"></td></tr> \
<tr><td>Товщина, мм</td><td id="thkn"></td></tr> \
<tr><td>Подача, мм</td><td id="podacha"></td></tr> \
<tr><td>Кількість місць</td><td id="mest"></td></tr> \
<tr><td>Норма витрат, гр</td><td id="nrmat"></td></tr> \
<tr><td>Розрахункова вага, гр</td><td id="rves"></td></tr> \
<tr><td>Номінальна вага, гр</td><td id="nves"></td></tr> \
<tr><td>Пакування, шт</td><td id="sikoka"></td></tr> \
<tr><td>Короб</td><td id="boxnum"></td></tr> \
<tr><td>Пакет</td><td id="paket"></td></tr> \
<tr><td>Цикли, хв.-1</td><td id="cycles"></td></tr> \
</tbody> \
</table> \
</div> \
<!-- pruduction information ends  --> \
<!-- insert list of same dimension items  --> \
<div id="listSameDim" class="container tab-pane fade"><br> \
</div> \
<!-- end list of same dimension items  --> \
<!-- insert list of same material items --> \
<div id="listSameMat" class="container tab-pane fade"><br> \
</div> \
<!-- end list of same material items  --> \
</div>';
	};
	flag=1;
	//
	//создать объект с названием и массивом индексов
	//
	var obj_01={};
	obj_01.name='';
	obj_01.ind=[];
	obj_01.rulon=[];
	//
	var i;
	var j=0;
	for (i=0; i < allItems.length; i++) {
     if (allItems[i].productName==correks) {
		 
		 
      //currentInd=i;
	  obj_01.name=correks;
	  //
	  if (obj_01.rulon.indexOf(allItems[i].coil.metod())==-1){
	  //
	  obj_01.ind[j]=i;
	  obj_01.rulon[j]=allItems[i].coil.metod();
	  j=j+1;
	  }
	 
	 
	 };  //end if
    };  //end for
	// productName
	//var nazva = obj_01.name;
	//if (allItems[obj_01.ind[0]].series=='cup' || allItems[obj_01.ind[0]].series=='plate'){
	//nazva=nazva+' '+allItems[obj_01.ind[0]].marking;
	//}
	//document.getElementById("itemName").innerHTML = '<h3>' + nazva + '<//h3>';
	//show material   
	var rollList='<p style="text-align: left">Виконання:<//p><br>';
	for (i=0; i<obj_01.ind.length; i++){
	rollList= rollList + '<a href="javascript:showContent('+ obj_01.ind[i] + ')">'+ allItems[obj_01.ind[i]].coil.metod() + '<//a> <br>';};
	document.getElementById("variant").innerHTML =  rollList;
	currentInd=obj_01.ind[0];  
	showContent(obj_01.ind[0]);
}; 
//-------------------------------------end function makeChoice-------------------------------------------------------------------------------------
//
//--------------------------------------функция заполнения контентом выбранного изделия-------------------------------------------------
//
function showContent(l){
document.getElementById("currentmat").innerHTML = allItems[l].coil.metod();
currentInd=l;
//
var nazva = allItems[l].productName;
if (allItems[l].series=='cup' || allItems[l].series=='plate'){
nazva=nazva+' '+allItems[l].marking;
}
document.getElementById("itemName").innerHTML = '<h3>' + nazva + '<//h3>';
//Заполнение производственных данных
document.getElementById("image").innerHTML ='<img id="image" src="pictures/items/'+  allItems[l].picture +'" alt="Нет рисунка" style="width:30vw">';
document.getElementById("LO").innerHTML ='<object width="80%" data="pictures/lo_picture/'+allItems[l].mold.picture_lo +'"></object>';
//document.getElementById("dwg").innerHTML ='<object width="80%" height="500" data="pictures/drawings/'+allItems[l].drawing +'"></object>';
document.getElementById("dwg").innerHTML ='<object width="80%" data="pictures/drawings/'+allItems[l].drawing +'"></object>';
document.getElementById("zak").innerHTML=allItems[l].customer.fullName;
document.getElementById("nrmat").innerHTML=allItems[l].sheetRate;
document.getElementById("rves").innerHTML=allItems[l].weightRated;
document.getElementById("nves").innerHTML=allItems[l].weightNominal;
document.getElementById("cycles").innerHTML=allItems[l].tempo;
document.getElementById("boxnum").innerHTML=allItems[l].box;
document.getElementById("sikoka").innerHTML=allItems[l].quantityInBox;
document.getElementById("razm").innerHTML=allItems[l].gabarit;
document.getElementById("mest").innerHTML=allItems[l].mold.cavities;
document.getElementById("oborud").innerHTML=allItems[l].mold.machine;
document.getElementById("kodizd").innerHTML=allItems[l].kode;
document.getElementById("nazba").innerHTML=allItems[l].productName;
document.getElementById("podacha").innerHTML=allItems[l].pitch;
document.getElementById("mtl").innerHTML=allItems[l].coil.assist;
document.getElementById("colir").innerHTML=allItems[l].coil.color;
document.getElementById("wdth").innerHTML=allItems[l].coil.width;
document.getElementById("thkn").innerHTML=allItems[l].coil.thickness;
document.getElementById("paket").innerHTML=allItems[l].poket;


//document.getElementById("lkat").innerHTML=allItems[l].docIssue;
//
findSameReel(l);
//
findSameDim(l);
};
// 
//----------------------------------end of function showContent------------------------------------------------------------------
//
//----------------------------------функция поиска одинаковых размеров-----------------------------------------------------------
function findSameDim(l){
//	
// это будут ссылки типа <a href="#" class="w3-bar-item w3-button">Название коррекса + фабрика</a>
//
var fnd=allItems[l].mold; //искать эту форму
//console.log(fnd);OK	

var sameDie = []; // массив с индексами изделий использующих эту форму
var sameDieName = []; // массив с названиями изделий использующих эту форму
 
  var j=0;
   for (var i = 0; i < allItems.length; i++) {
	 if (allItems[i].mold==fnd) {
	     if (sameDieName.indexOf(allItems[i].productName)==-1){
	         sameDie[j]=i;
	         sameDieName[j]=allItems[i].productName;
			 //console.log(sameDieName[j]);
 	         j=j+1;
			 };
        };
    };
//
//console.log(sameDie.length);
var str='Вироби того ж розміру: <br>';
var e;

if (sameDie.length==1){
	document.getElementById("listSameDim").innerHTML="Нет других изделий с этим размером";
} 
else {for (i=0; i<sameDie.length; i++) {
var e=sameDie[i];
str=str+ '<a href="javascript:showContent(' + '\'' + sameDie[i] + '\''+')">'+allItems[e].productName+'<//a><br>';
};
document.getElementById("listSameDim").innerHTML=str;
};
currentInd=l;
//console.log(str);
};
//
//-----------------------------end function findSameDim--------------------------------------------------------------------------------------
//
//----------------------------------функция поиска одинаковых материалов-----------------------------------------------------------
//
function findSameReel(srl){
var fnd=allItems[srl].coil; //искать этот материал
	
var sameRoll = []; // массив с индексами изделий использующих этот материал
var sameRollName = []; // массив с названиями изделий использующих этот материал
var j=0;
   for (var i = 0; i < allItems.length; i++) {
	 if (allItems[i].coil==fnd) {
	    sameRoll[j]=i;
			sameRollName[j]=allItems[i].productName;
			j=j+1; 
        };
    };
var str='Матеріал застсовується для:<br>';	
if (sameRoll.length==1){
	document.getElementById("listSameMat").innerHTML="інших виробів з цього матеріалу не знайдено";
} 	else {for (i=0; i<sameRoll.length; i++) {
//var e=sameDie[i];
str=str+ '<a href="javascript:showContent(' + '\'' + sameRoll[i] + '\''+')">'+allItems[sameRoll[i]].productName+'<//a><br>';
};
document.getElementById("listSameMat").innerHTML=str;
};
currentInd=srl;
};
//
//--------------------------------------end function findSameReel-------------------------------------------------------------------
//
//-------------------------------------------------------------------------------------------------------------------------------------
//  function calculateNR(){
//};
//-------------------------------------------------------------------------------------------------------------------------------------
function makeMatList(){
  // ф-я создает список материалов - всех применяемых
  // очистка списков
  document.getElementById("itemList").innerHTML="";
  document.getElementById("rightpart").innerHTML="";
  // спмски очищены
  //77777777777777777777
  actualReels={};
  for (i = 0; i < allItems.length; i++) {
	if (allItems[i].usability ==true)	{
	let narma= allItems[i].coil.metod();
	actualReels[narma]=allItems[i].coil;
	//	actualReels[narma]["metod"]=narma;
	}
  }
  //77777777777777777777	
	
  document.getElementById("midpart").innerHTML='<input id="myInput" type="text" placeholder="???..."><br><div id="myDIV"></div>';



  (function(){  $("#myInput").on("keyup", function() {var value = $(this).val().toLowerCase();$("#myDIV *").filter(function(){$(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)});});})();  
  
  
  
  
  let element=document.getElementById("myDIV");
  let y=0
  for(key in actualReels){
 //   let mat_li=document.createElement("li");
    let mat_a=document.createElement("a");
	mat_a.setAttribute("class", "list-group-item");
    mat_a.setAttribute("href", "javascript: fooz(actualReels['" + key +  "'])");
	mat_a.setAttribute("onclick", "change_css_mat("+ y +")");
	y=y+1;
    let t = document.createTextNode(actualReels[key].metod());
    mat_a.appendChild(t);
//    mat_li.appendChild(mat_a);
    element.appendChild(mat_a);
  }
// ОБНОВЛЕНИЕ СПИСКА!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
 //*********************** ****** ****** ****** ****** ****** ****** ******
// $( "#midpart" ).listview("refresh");// ****** ****** ****** ****** ******
// ************************ ***** ****** ****** ****** ****** ****** ******
//
flag=0;
//midle();
};
function fooz(rr){
  document.getElementById("rightpart").innerHTML='';
  //console.log(rr);
  //let product, union;
//  document.getElementById("itemList").innerHTML="";
  document.getElementById("itemList").innerHTML='<h4>' + rr.metod() + '<//h4>';
//  document.getElementById("zagolovok").innerHTML=rr.metod();
//  document.getElementById("zagolov").innerHTML=rr.metod();

  let element = document.getElementById("itemList");
for (let i=0; i<allItems.length; i++){
 // product=allItems[i].productName;
    if(allItems[i].coil==rr){
      
//      let element_li = document.createElement("li");
      let element_a=document.createElement("a");
//      let element_h2=document.createElement("h2");
      let element_img=document.createElement("img");
      element_a.setAttribute("class", "list-group-item");
      element_a.setAttribute("style", "color: black; font-size: 1.0em");

      element_a.setAttribute("href", "javascript: showContent(" + i + ')');
	      element_a.setAttribute("onclick", "javascript: midle()");
  
      element_img.setAttribute("src", "pictures/logo/"+allItems[i].customer.logo );
	  element_img.setAttribute("style", "height: 5vh;");
      let t = document.createTextNode(allItems[i].productName);
//      element_h2.appendChild(t);


      element_a.appendChild(element_img);
      element_a.appendChild(t);
//      element_li.appendChild(element_a);
      element.appendChild(element_a);

}
document.getElementById("rightpart").innerHTML='<br><br><p>Рецептура суміші:<//p><br><p>' + rr.recipi.mix + '<//p><br> <p>Надпис на відходах: <//p> <br> <p>'+ rr.recipi.bbi + '<//p>';
}
//backPageName('#pageMaterials');

// ОБНОВЛЕНИЕ СПИСКА!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
 //*********************** ****** ****** ****** ****** ****** ****** ******
// $( "#itemList" ).listview("refresh");// ****** ****** ****** ****** ******
// ************************ ***** ****** ****** ****** ****** ****** ******

};

function midle(){
//
	if (flag==0){
	document.getElementById("midpart").innerHTML='<div class="card text-center"> \
<div id="itemName" class="card-header"></div> \
<div class="card-body"> \
<!-- Nav tabs --> \
<ul class="nav nav-tabs" role="tablist"> \
<li class="nav-item"> \
<a class="nav-link active" data-toggle="tab" href="#image">View</a> \
</li> \
<li class="nav-item"> \
<a class="nav-link" data-toggle="tab" href="#LO">Layout</a> \
</li> \
<li class="nav-item"> \
<a class="nav-link" data-toggle="tab" href="#dwg">Drawing</a> \
</li> \
</ul> \
<!-- Tab panes --> \
<div class="tab-content"> \
<!-- insert picture  --> \
<div id="image" class="container tab-pane active"><br> \
</div> \
<!-- picture ends  --> \
<!-- insert layout  --> \
<div id="LO" class="container tab-pane fade"><br> \
</div> \
<!-- layout ends  --> \
<!-- insert drawing  --> \
<div id="dwg" class="container tab-pane fade"><br> \
</div> \
<!-- drawing ends  --> \
</div> \
</div> \
<div id="currentmat" class="card-footer"> \
<br> \
</div> \
<div id="variant" > \
</div> \
</div>';
	document.getElementById("rightpart").innerHTML=
'<!-- Nav tabs --> \
<ul class="nav nav-tabs" role="tablist"> \
<li class="nav-item"><a class="nav-link active" data-toggle="tab" href="#prodInfo">Опис</a></li> \
<li class="nav-item"><a class="nav-link" data-toggle="tab" href="#listSameDim">Розмір</a></li> \
<li class="nav-item"><a class="nav-link" data-toggle="tab" href="#listSameMat">Матеріал</a></li> \
</ul> \
<!-- Tab panes --> \
<div class="tab-content"> \
<div id="prodInfo" class="container tab-pane active"><br> \
<!-- insert pruduction information  --> \
<table class="table"> \
<tbody id="description"> \
<tr><td>Замовник</td><td id="zak"></td></tr> \
<tr><td>Код</td><td id="kodizd"></td></tr> \
<tr><td>Обладнання</td><td id="oborud"></td></tr> \
<tr><td>Назва</td><td id="nazba"></td></tr> \
<tr><td>Розміри, мм</td><td id="razm"></td></tr> \
<tr><td>Матеріал</td><td id="mtl"></td></tr> \
<tr><td>Колір</td><td id="colir"></td></tr> \
<tr><td>Ширина, мм</td><td id="wdth"></td></tr> \
<tr><td>Товщина, мм</td><td id="thkn"></td></tr> \
<tr><td>Подача, мм</td><td id="podacha"></td></tr> \
<tr><td>Кількість місць</td><td id="mest"></td></tr> \
<tr><td>Норма витрат, гр</td><td id="nrmat"></td></tr> \
<tr><td>Розрахункова вага, гр</td><td id="rves"></td></tr> \
<tr><td>Номінальна вага, гр</td><td id="nves"></td></tr> \
<tr><td>Пакування, шт</td><td id="sikoka"></td></tr> \
<tr><td>Короб</td><td id="boxnum"></td></tr> \
<tr><td>Пакет</td><td id="paket"></td></tr> \
<tr><td>Цикли, хв.-1</td><td id="cycles"></td></tr> \
</tbody> \
</table> \
</div> \
<!-- pruduction information ends  --> \
<!-- insert list of same dimension items  --> \
<div id="listSameDim" class="container tab-pane fade"><br> \
</div> \
<!-- end list of same dimension items  --> \
<!-- insert list of same material items --> \
<div id="listSameMat" class="container tab-pane fade"><br> \
</div> \
<!-- end list of same material items  --> \
</div>';
	};
	flag=1;
	//

};
//
function change_css(cld){
		let awe=document.getElementById("itemList");
			for (var i = 0; i < awe.childNodes.length; i++){
			awe.childNodes[i].style="color: black; font-size: 1em; background-color: white;"
			}
		awe.childNodes[cld].style="color: black; font-size: 1em; background-color: AliceBlue;"
    };
//
function change_css_mat(dlk){
		ade=document.getElementById("myDIV");
			for (let i = 0; i < ade.childNodes.length; i++){
			ade.childNodes[i].style="color: black; font-size: 1em; background-color: white;"
			}
		ade.childNodes[dlk].style="color: black; font-size: 1em; background-color: AliceBlue;"
    }
