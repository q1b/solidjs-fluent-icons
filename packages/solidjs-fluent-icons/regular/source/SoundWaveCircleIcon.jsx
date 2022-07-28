import { splitProps } from "solid-js";
function SoundWaveCircleIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M9 7.5a.5.5 0 00-1 0v5a.5.5 0 001 0v-5zM6 8c.28 0 .5.22.5.5v2a.5.5 0 01-1 0v-2c0-.28.22-.5.5-.5zm5 0c.28 0 .5.22.5.5v2a.5.5 0 01-1 0v-2c0-.28.22-.5.5-.5zm2.5-1c.28 0 .5.22.5.5v5a.5.5 0 01-1 0v-5c0-.28.22-.5.5-.5zM10 2a8 8 0 100 16 8 8 0 000-16zm-7 8a7 7 0 1114 0 7 7 0 01-14 0z"/>
    </svg>);
}
export default SoundWaveCircleIcon;
