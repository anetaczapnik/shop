import {SignedIn, SignedOut, SignInButton, UserButton} from "@clerk/clerk-react";

const SignIn = () => {
    return (
        <>
            < div>
                <SignedOut>
                    <SignInButton />
                </SignedOut>
                <SignedIn>
                    <UserButton afterSignOutUrl="/" />
                </SignedIn>
            </div>
        </>
    )
}

export default SignIn;