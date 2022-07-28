import { splitProps } from "solid-js";
function KeyboardLayoutResizeIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M3 3.5c0-.28.22-.5.5-.5h7a.5.5 0 000-1h-7C2.67 2 2 2.67 2 3.5v4a.5.5 0 001 0v-4zM3.5 9C2.67 9 2 9.67 2 10.5v6c0 .83.67 1.5 1.5 1.5h8c.83 0 1.5-.67 1.5-1.5v-6c0-.83-.67-1.5-1.5-1.5h-8zM3 10.5c0-.28.22-.5.5-.5h8c.28 0 .5.22.5.5v6a.5.5 0 01-.5.5h-8a.5.5 0 01-.5-.5v-6zM5.5 15a.5.5 0 000 1h4a.5.5 0 000-1h-4zm0-2.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm2 .75a.75.75 0 100-1.5.75.75 0 000 1.5zm3.5-.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM17.5 9c.28 0 .5.22.5.5v7c0 .83-.67 1.5-1.5 1.5h-2a.5.5 0 010-1h2a.5.5 0 00.5-.5v-7c0-.28.22-.5.5-.5zm-4-7a.5.5 0 000 1h2.8l-4.15 4.15a.5.5 0 00.7.7L17 3.71V6.5a.5.5 0 001 0v-4a.5.5 0 00-.5-.5h-4z"/>
    </svg>);
}
export default KeyboardLayoutResizeIcon;
