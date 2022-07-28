import { splitProps } from "solid-js";
function ImageGlobeIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M4.55 2.15A8.9 8.9 0 004.01 5h2.98a8.9 8.9 0 00-.54-2.85 2.93 2.93 0 00-.53-.91C5.73 1.04 5.59 1 5.5 1c-.1 0-.23.05-.42.24-.18.19-.36.5-.53.91zm-.72-.83A9.92 9.92 0 003 5H1.03a4.5 4.5 0 012.8-3.68zm3.34 0A9.92 9.92 0 017.99 5h1.98a4.5 4.5 0 00-2.8-3.68zM9.97 6H8a9.92 9.92 0 01-.82 3.68A4.5 4.5 0 009.97 6zM5.5 10c.1 0 .23-.05.42-.24.18-.19.36-.5.53-.91.3-.73.5-1.72.54-2.85H4.01a8.9 8.9 0 00.54 2.85c.17.42.35.72.53.91.19.2.33.24.42.24zm-1.67-.32A4.5 4.5 0 011.03 6H3a9.92 9.92 0 00.82 3.68zM5.5 11a5.5 5.5 0 004.9-8H14a3 3 0 013 3v8c0 .65-.2 1.25-.56 1.74l-5.39-5.3a1.5 1.5 0 00-2.1 0l-5.4 5.3C3.22 15.25 3 14.64 3 14v-3.6c.75.38 1.6.6 2.5.6zm7-3a.5.5 0 100-1 .5.5 0 000 1zm0 1a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm-8.23 7.45c.49.35 1.08.55 1.73.55h8c.65 0 1.24-.2 1.73-.55l-5.38-5.3a.5.5 0 00-.7 0l-5.38 5.3z"/>
    </svg>);
}
export default ImageGlobeIcon;
