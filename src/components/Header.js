import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/clerk-react"
const Header = () => {
    return (
        <header>
            <h1>Internet Shop</h1>
            <img src="https://static.vecteezy.com/system/resources/previews/002/294/869/large_2x/book-delivery-web-banner-design-online-bookstore-concept-online-education-online-store-online-shopping-header-or-footer-banner-free-vector.jpg" alt="hi"/>
           < div>
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton afterSignOutUrl="/" />
      </SignedIn>
    </div>
        </header>
    )
}

export default Header;