import { splitProps } from "solid-js";
function StickerIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M6 3a3 3 0 00-3 3v8a3 3 0 003 3h5v-3.08a5.87 5.87 0 01-3.47-.47 4.2 4.2 0 01-.86-.57l-.01-.02h-.01a.5.5 0 01.7-.72 1 1 0 00.14.12c.1.07.26.18.48.3A4.5 4.5 0 0010 13c.43 0 .81-.05 1.15-.14a2.75 2.75 0 012.6-1.86H17V6a3 3 0 00-3-3H6zm1.5 6a1 1 0 110-2 1 1 0 010 2zm6-1a1 1 0 11-2 0 1 1 0 012 0zm-.7 8.41a2 2 0 01-.8.5v-3.16c0-.97.78-1.75 1.75-1.75h3.15a2 2 0 01-.49.8L12.8 16.4z"/>
    </svg>);
}
export default StickerIcon;
