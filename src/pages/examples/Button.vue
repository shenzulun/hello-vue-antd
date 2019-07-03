<template>
  <div>
    <h1>button</h1>

    <a-button type="primary">Button-primary</a-button>
    <a-button type="default" disabled>Button-default</a-button>
    <a-button type="dashed">Button-dashed</a-button>
    <a-button type="danger">Button-danger</a-button>
    <br />
    <Button class="Group">
      <a-button type="default" icon="close"></a-button>
      <a-button type="primary" icon="check" onclick="alert('ok')"></a-button>
    </Button>
    <br />
    <Button class="Group">
      <a-button type="primary" size="large">Button-primary</a-button>
      <a-button type="default" loading="true">Button-default</a-button>
    </Button>
  </div>
</template>
<script>
export default {
  //name: 'example-button',
  data() {
    return {
      msg: "我是 button 组件"
    }
  }
}
</script>