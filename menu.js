

function createMenu() {
    let all = document.createElement('div');
    all.className = 'mainMenu';
    all.id = 'mainMenu';
    document.body.appendChild(all);
    // <option value="Impact,Charcoal,sans-serif">  Crimson Text  </option>
    //     <option value="4">  Fira Code  </option>
    //     <option value="5">  Monaco  </option>
    $('.mainMenu').prepend(`
    <div style="height:20px">
    <span id="hideMenu">x</span>
    </div>
    <div style="text-align: center;">
    <input style="text-align: center;height: 30px;width: 110px;" id="deleteElement"  type="button" name="deleteElement" value="Delete Element">
</div>  
 
    <div class="text1">
    <h2>Text</h2>
    <div class="text font-family">
        <label for="font-familys">Font Family:</label>
        <select id="selectFontFamily">
        <option value="Calibri">  Calibri  </option>
        <option value="Droid Sans">   Droid Sans </option>
        <option value="Lato">   Lato </option>  
    </select> 
</div>
<div class="text font-size">
    <label for="font">Font Size:</label>
    <select name="font-size" id="selectFontSize">
        <option value="9">  9  </option>
        <option value="10">  10 </option>
        <option value="11">   11 </option>
        <option value="12">  12  </option>
        <option value="14">  14</option>
        <option value="18">   18 </option> 
        <option value="24">  24 </option>
        <option value="30">  30 </option>
        <option value="36">   36 </option>
        <option value="48">  48  </option>
        <option value="64">  64 </option>
        <option value="72">   72 </option> 
        <option value="96">   96 </option> 
    </select>
</div>
<div class="text font-weight">
<label>Font Weight:</label>
    <div class="buttonsGroup">
        <input class="button1" id="boldFontBtn"  type="button" name="Bold" value="Bold">
        <input class="button1"  id="normalFontBtn" type="button" name="Normal" value="Normal">
    </div>
    <div class="clearBoth"></div>
</div>


<div class="text font-style">
    <label>Font Style:</label>
    <div class="buttonsGroup">
        <input  class="button1" id="capitalLetterFontBtn"  type="button" name="Abc" value="Abc">
        <input   class="button1"  id="uppercaseLetterFontBtn" type="button" name="ABC" value="ABC">
        <input   class="button3" id="lowercaseLetterFontBtn" type="button" name="abc" value="abc">
    </div>
   <div class="clearBoth"></div>
</div>

<div class="text line-height">
    <label> Line Height</label>
    <input id="text-line-height" type="number"> 
</div>
<div class="text letter-spacing">
    <label> Letter Spacing</label>
    <input id="letterSpacingFont" type="number"> 
</div>

</div>

<div class="color-and-background"> 
    <h2>Color & Background</h2>

<div class="background-color">
        <label>Background Color</label>
        <input type="color" id="backgroundColor" class="background-color-text"> 
    </div>
    <div class="colorize">
        <label for="color"> Color</label>
        <input type="color" id="fontColor" class="color"> 
    </div>

    
</div>`);
}

createMenu();
