<template>
    <section>
      <h2>VzButton</h2>

      <div class="sub-section">
        <h3>Regular</h3> 
        <VzButton id="btn1" label="Button" tooltip="Button" @click="buttonClicked" class="teste"/>
        <VzButton id="btn2" label="Button" icon="check" @click="buttonClicked"/>
        <VzButton id="btn3" label="Disabled" :disabled="true" @click="buttonClicked"/>
      </div>

      <div class="sub-section">
        <h3>Circle</h3>
        <VzButton id="btn4" circle size="small" icon="edit" @click="buttonClicked"/>
        <VzButton id="btn5" circle icon="check" @click="buttonClicked"/>
        <VzButton id="btn6" circle size="large" icon="trash" :disabled="true" @click="buttonClicked"/>
      </div>

      <div class="sub-section">
        <h3>Props</h3>
        <table class="table-of-contents">
          <thead>
            <th>Name</th>
            <th>Description</th>
            <th>Type</th>
            <th>Valid values</th>
            <th>Default</th>
            <th>Required</th>
          </thead>
          <tbody>
            <tr>
              <td>id</td>
              <td>Element id</td>
              <td>String</td>
              <td>-</td>
              <td>-</td>
              <td>true</td>
            </tr>            
            <tr>
              <td>label</td>
              <td>Label of the button</td>
              <td>String</td>
              <td>-</td>
              <td>-</td>
              <td>false</td>
            </tr>
            <tr>
              <td>submit</td>
              <td>Set button behavior to submit</td>
              <td>Boolean</td>
              <td>true / false</td>
              <td>false</td>
              <td>false</td>
            </tr>
            <tr>
              <td>circle</td>
              <td>Change button shape to circle</td>
              <td>Boolean</td>
              <td>true / false</td>
              <td>false</td>
              <td>false</td>
            </tr>
            <tr>
              <td>icon</td>
              <td>Set icon as button label - Use the font-awesome icons</td>
              <td>String</td>
              <td>Ex: check (use "fa fa-check"), trash (use "fa fa-trash")</td>
              <td>-</td>
              <td>false</td>
            </tr>
            <tr>
              <td>tooltip</td>
              <td>Set a button tooltip</td>
              <td>String</td>
              <td>-</td>
              <td>-</td>
              <td>false</td>
            </tr>
            <tr>
              <td>disabled</td>
              <td>Disable the button</td>
              <td>Boolean</td>
              <td>true / false</td>
              <td>false</td>
              <td>false</td>
            </tr>
            <tr>
              <td>size</td>
              <td>Set button size if its a circle</td>
              <td>String</td>
              <td>small (24x24)px, medium (3838)px, large (52x52)px</td>
              <td>medium</td>
              <td>false</td>
            </tr>                        
          </tbody>
        </table>
      </div>

      <div class="sub-section">
        <h3>Events</h3>
        <table class="table-of-contents">
          <thead>
            <th>Name</th>
            <th>Description</th>
          </thead>
          <tbody>
            <tr>
              <td>click</td>
              <td>Emited on button clicked</td>
            </tr>                     
          </tbody>
        </table>
      </div>      
    </section>
</template>

<script>
export default {
    name: 'VzButtonDocumentation',
    methods: {
      buttonClicked(event) {
        console.log(event);
        alert('Button Clicked');
      }
    }
}
</script>

<style scoped>
button{
  margin-left: 10px;
}
.teste {
  background: red;
}
</style>