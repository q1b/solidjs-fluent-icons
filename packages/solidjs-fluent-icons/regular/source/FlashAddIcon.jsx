import { splitProps } from "solid-js";
function FlashAddIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M6.2 2.77C6.31 2.31 6.73 2 7.2 2h5.25c.73 0 1.24.71 1.01 1.4L12.2 7h2.56c.95 0 1.4 1.14.77 1.81l-.24.25a5.54 5.54 0 00-1.38-.03l.9-.91a.06.06 0 00.01-.03v-.05a.08.08 0 00-.03-.03L14.77 8H11.5a.5.5 0 01-.47-.67l1.5-4.25a.06.06 0 00-.07-.08H7.21a.06.06 0 00-.06.05L4.9 10.92c0 .04.02.08.06.08h1.91a.5.5 0 01.49.62l-1.33 5.3v.04l.03.03.04.01h.01l.03-.02 2.88-2.94a5.58 5.58 0 00.05 1.37l-2.21 2.26c-.76.79-2.06.06-1.8-1L6.23 12H4.96c-.7 0-1.21-.68-1.02-1.36L6.2 2.77zM17 18.24a4.5 4.5 0 11-5-7.48 4.5 4.5 0 015 7.48zm-2.15-6.1a.5.5 0 00-.85.36V14h-1.5a.5.5 0 000 1H14v1.5a.5.5 0 001 0V15h1.5a.5.5 0 000-1H15v-1.5a.5.5 0 00-.15-.35z"/>
    </svg>);
}
export default FlashAddIcon;
