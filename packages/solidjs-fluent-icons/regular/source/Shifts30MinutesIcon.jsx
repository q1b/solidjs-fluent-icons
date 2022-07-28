import { splitProps } from "solid-js";
function Shifts30MinutesIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M8.5 4.5a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM10 2a2.5 2.5 0 100 5 2.5 2.5 0 000-5zm-3 8a1 1 0 011-1h4a1 1 0 011 1v.5a.5.5 0 001 0V10a2 2 0 00-2-2H8a2 2 0 00-2 2v.5a.5.5 0 001 0V10zm-1.5 3.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm-.75 3.75a.75.75 0 100-1.5.75.75 0 000 1.5zm8.05-3.58c-.18.3-.3.77-.3 1.33s.12 1.03.3 1.33c.17.28.4.42.7.42.3 0 .53-.14.7-.42.18-.3.3-.77.3-1.33a2.6 2.6 0 00-.3-1.33c-.17-.28-.4-.42-.7-.42-.3 0-.53.14-.7.42zm-.85-.52c.33-.53.85-.9 1.55-.9.7 0 1.22.37 1.55.9.32.5.45 1.17.45 1.85 0 .68-.13 1.34-.45 1.85-.33.53-.85.9-1.55.9-.7 0-1.22-.37-1.55-.9a3.58 3.58 0 01-.45-1.85c0-.68.13-1.34.45-1.85zm-4.14.5c.46-.36.83-.43 1.08-.4.25.05.44.2.54.37.1.17.09.35 0 .48-.08.14-.32.35-.9.4a.5.5 0 000 1c.6.05.82.25.9.37.09.13.1.31 0 .5-.1.18-.3.33-.55.37-.25.04-.61-.02-1.07-.38a.5.5 0 10-.62.78c.62.5 1.26.68 1.85.6.57-.1 1.02-.45 1.26-.9a1.47 1.47 0 00-.33-1.85 1.47 1.47 0 00.33-1.86c-.24-.44-.7-.78-1.27-.86a2.4 2.4 0 00-1.84.6.5.5 0 00.62.78z"/>
    </svg>);
}
export default Shifts30MinutesIcon;
