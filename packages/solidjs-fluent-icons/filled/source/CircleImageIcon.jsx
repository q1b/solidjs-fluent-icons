import { splitProps } from "solid-js";
function CircleImageIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M10.5 7h2.48A5.5 5.5 0 107 12.98V10.5A3.5 3.5 0 0110.5 7zm0 1A2.5 2.5 0 008 10.5v5c0 .5.15.98.41 1.38l3.18-3.17a2 2 0 012.82 0l3.18 3.17c.26-.4.41-.87.41-1.38v-5A2.5 2.5 0 0015.5 8h-5zm5.5 3a1 1 0 11-2 0 1 1 0 012 0zm.88 6.59L13.7 14.4a1 1 0 00-1.42 0L9.12 17.6c.4.26.87.41 1.38.41h5c.5 0 .98-.15 1.38-.41z"/>
    </svg>);
}
export default CircleImageIcon;
