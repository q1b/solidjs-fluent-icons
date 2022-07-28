import { splitProps } from "solid-js";
function HandWaveIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 21" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M15.85 1.15a.5.5 0 00-.7 0 .5.5 0 000 .71 6.57 6.57 0 011.86 5.57.5.5 0 00.42.57.5.5 0 00.56-.42 7.6 7.6 0 00-2.14-6.43zm-10.4.35a.75.75 0 10-1.4.5l2.1 5.93a.53.53 0 11-1 .36L3.45 3.5a.75.75 0 00-1.41.5l2.55 7.18c-2.12-.57-2.85.58-3.07 1.1-.06.12.02.25.15.3.82.24 3.67 1.26 6.85 4.3.6.59 1.49.79 2.26.47l2.16-.9a2 2 0 001.21-1.58l.27-2.01a8 8 0 00-.34-3.63L13 6h-.01l-1.15-3.49a.75.75 0 00-1.42.49l.96 2.93a.63.63 0 01-1.2.42L8.68 2a.75.75 0 00-1.42.5l1.5 4.34a.66.66 0 01-1.24.45L5.45 1.5zm8.79 1.57a.5.5 0 01.69.18l.3.5c.49.83.76 1.78.77 2.75a.5.5 0 11-1 0c-.01-.79-.23-1.56-.64-2.24l-.3-.5a.5.5 0 01.18-.69z"/>
    </svg>);
}
export default HandWaveIcon;
