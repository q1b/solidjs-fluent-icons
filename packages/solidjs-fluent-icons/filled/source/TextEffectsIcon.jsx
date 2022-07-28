import { splitProps } from "solid-js";
function TextEffectsIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M12.09 3.9a2.25 2.25 0 00-4.18 0L4.9 11.37a2.2 2.2 0 00-.04.1l-1.2 2.95a2.25 2.25 0 004.18 1.68l.64-1.59h3.04l.64 1.6a2.25 2.25 0 104.18-1.7l-1.2-2.95a2.27 2.27 0 00-.04-.1L12.1 3.92zm-1.4.57l3.04 7.48v.03l1.22 2.99a.75.75 0 01-1.4.56L12.54 13H7.47l-1.02 2.53a.75.75 0 01-1.4-.56l1.21-2.99.02-.03L9.3 4.47a.75.75 0 011.39 0zm1.23 7.03H8.08L10 6.75l1.92 4.75z"/>
    </svg>);
}
export default TextEffectsIcon;
