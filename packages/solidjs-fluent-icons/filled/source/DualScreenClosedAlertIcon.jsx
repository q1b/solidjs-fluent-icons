import { splitProps } from "solid-js";
function DualScreenClosedAlertIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M10.5 5a3 3 0 016 0v2l1.32 1.12a.5.5 0 01-.32.88h-8a.5.5 0 01-.32-.88L10.5 7V5zm3 6a1.5 1.5 0 01-1.42-1h2.83c-.2.58-.76 1-1.41 1zm-4-4.46l-.97.82A1.5 1.5 0 009.5 10h1.52l.12.33A2.5 2.5 0 0014 11.95V15a2 2 0 01-2 2H6a1 1 0 01-1-1V6a1 1 0 011-1h3.5v1.54z"/>
    </svg>);
}
export default DualScreenClosedAlertIcon;
