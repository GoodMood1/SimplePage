
const b1 = form.elements.btnaddM;
const b2 = form.elements.getdr;
const c1 = form.elements.Clientcash;
const c2 = form.elements.ValidExist;
let l = 0;
const drinks={
  'Success potion':8,
  'Love potion':5,
  'Happy potion':7,
  'Beauty potion':6
}
for (const drink in drinks) {
  const price = drinks[drink];
  var str = `<label><input type="radio" name="Drink" disabled value="${drink}" id="">${drink} - ${price}$</label><br>`;
  document.getElementById('inp0').innerHTML += str;
}
const drin = form.elements.Drink;
b1.addEventListener('click',(e)=>{
  l=0;
  e.preventDefault();
if(c1.value>0){
c2.value=Number(c2.value)+Number(c1.value);
for (const drink in drinks) {
  if(drinks[drink]<=Number(c2.value)){
drin[l].disabled=false;
  }
 l++;
}
}else{
  e.preventDefault();
}
});

const rbs = document.querySelectorAll('input[name="Drink"]');
b2.addEventListener('click',(e)=>{
  e.preventDefault();
            let selectedValue;
            for (const rb of rbs) {
                if (rb.checked) {
                  selectedValue= drinks[rb.value];
                    break;
                }
            }
  if(selectedValue<=c2.value){
    form.elements.ValidExist2.value=c2.value-selectedValue;
    c2.value=form.elements.ValidExist2.value;
    form.elements.ValidExist3.value="Drink is prepared";
   setTimeout(()=>{
   form.elements.ValidExist3.value="";
   form.elements.ValidExist2.value="";
   if(Number(c2.value)>0){
   if (confirm(`Do you want to withdraw ${c2.value}$?`)) {
    c2.value=0;
}
   }
  },1500);
  }
  else{
alert("Wrong");
  }
});