import { splitProps } from "solid-js";
function ContentViewGalleryIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M9 7H6v2h3V7zM3 6a3 3 0 013-3h6v14H6a3 3 0 01-3-3V6zm2 1v2a1 1 0 001 1h3a1 1 0 001-1V7a1 1 0 00-1-1H6a1 1 0 00-1 1zm.5 4a.5.5 0 000 1h4a.5.5 0 000-1h-4zM5 13.5c0 .28.22.5.5.5h4a.5.5 0 000-1h-4a.5.5 0 00-.5.5zm8 3.5h1a3 3 0 003-3v-1h-4v4zm4-5V8h-4v4h4zm0-5V6a3 3 0 00-3-3h-1v4h4z"/>
    </svg>);
}
export default ContentViewGalleryIcon;
