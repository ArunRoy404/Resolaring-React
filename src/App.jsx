import { ArrowUpIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { toast } from "sonner";

const App = () => {
  return (
    <div>
      <h1>hello</h1>
      <div className="flex flex-wrap items-center gap-2 md:flex-row">
        <Button
                  onClick={() => toast("Yo baby whats up?")}
                   variant="outline">Button</Button>
        <Button

          variant="outline" size="icon" aria-label="Submit">
          <ArrowUpIcon />
        </Button>
      </div>
    </div>
  );
};

export default App;

