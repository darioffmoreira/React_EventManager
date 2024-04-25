interface NavLinkProps {
  children: string,
  href: string
}

export function NavLink(props: NavLinkProps) {
  return (
    <a href={ props.href} className="font-medium text-sm">
      { props.children }
    </a>
  )
}