import { splitProps } from "solid-js";
function PeopleTeamDeleteIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M8.5 4.5a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM10 2a2.5 2.5 0 100 5 2.5 2.5 0 000-5zm4.5 3a1 1 0 112 0 1 1 0 01-2 0zm1-2a2 2 0 100 4 2 2 0 000-4zm-11 1a1 1 0 100 2 1 1 0 000-2zm-2 1a2 2 0 114 0 2 2 0 01-4 0zM5 15h.1c.07.34.17.66.3.97A3 3 0 012 13V9.25C2 8.56 2.56 8 3.25 8h2.13c-.2.3-.33.63-.37 1H3.25a.25.25 0 00-.25.25V13c0 1.1.9 2 2 2zm8.97-6c-.11-.57-.62-1-1.22-1h-5.5C6.56 8 6 8.56 6 9.25V14a4 4 0 004.25 4 5.51 5.51 0 01-.66-1.03A3 3 0 017 14V9.25c0-.14.11-.25.25-.25h6.72zM18 10.26V9.25C18 8.56 17.44 8 16.75 8h-2.13c.2.3.33.63.37 1h1.76c.14 0 .25.11.25.25v.35c.36.18.7.4 1 .66zM14.5 19a4.5 4.5 0 100-9 4.5 4.5 0 000 9zm1.85-5.65l-1.14 1.15 1.14 1.15a.5.5 0 01-.7.7l-1.15-1.14-1.15 1.14a.5.5 0 01-.7-.7l1.14-1.15-1.14-1.15a.5.5 0 01.7-.7l1.15 1.14 1.15-1.14a.5.5 0 01.7.7z"/>
    </svg>);
}
export default PeopleTeamDeleteIcon;
