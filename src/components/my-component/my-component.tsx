import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'my-component',
  shadow: true
})
export class MyComponent {
  @Prop() label: string;

  render() {
    return <div><slot>{this.label}</slot></div>;
  }
}
