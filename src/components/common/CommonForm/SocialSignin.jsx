import { Button } from "@/components/ui/button";
import appleIcon from '@/components/common/svg/iconsApple.svg'
import googleIcon from '@/components/common/svg/iconsGoogle.svg'


const SocialSignin = () => {
    return (
        <div className="flex gap-3 justify-center">
            <div className="space-x-8">
                <Button
                    type="button"
                    variant="outline"
                    className="flex-1 h-9 text-xs font-medium text-primary justify-center gap-2 py-5 border-[#DFE0E4]"
                >

                    <img
                        src={googleIcon}
                        alt="appleIcon"
                        className="w-4 h-4"
                    />
                    Sign in with Google
                </Button>

                <Button
                    type="button"
                    variant="outline"
                    className="flex-1 h-9 text-xs font-medium text-primary justify-center gap-2 py-5 border-[#DFE0E4]"
                >
                    <img
                        src={appleIcon}
                        alt="appleIcon"
                        className="w-4 h-4"
                    />
                    sign in with Apple
                </Button>
            </div>
        </div>
    );
};

export default SocialSignin;