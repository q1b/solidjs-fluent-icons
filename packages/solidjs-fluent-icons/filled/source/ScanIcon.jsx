import { splitProps } from "solid-js";
function ScanIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M9.7 3.5L7.02 8.19l-.18.33-1.65-2.87A6.48 6.48 0 019.7 3.51zM8.28 9l.03-.05a2 2 0 013.43.05l.03.06a2 2 0 01-.03 1.94l-.03.05A2 2 0 018.27 11l-.03-.06A2 2 0 018.27 9zm-1.35 2.67l.2.33h-3.3a6.5 6.5 0 01.41-5l2.7 4.67zM10 13.5l.3-.01-1.66 2.87a6.5 6.5 0 01-4.12-2.86H10zm2.99-1.68l.18-.33 1.65 2.87a6.48 6.48 0 01-4.53 2.13l2.7-4.67zm.09-3.49a3.52 3.52 0 00-.2-.33h3.3a6.5 6.5 0 01-.41 5l-2.7-4.67zM10 6.5l-.3.01 1.66-2.87a6.5 6.5 0 014.12 2.86H10zM10 2a8 8 0 100 16 8 8 0 000-16z"/>
    </svg>);
}
export default ScanIcon;
