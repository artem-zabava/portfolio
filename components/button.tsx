import { cn } from "@/lib/utils";

type Props = React.ComponentProps<"button">;

  export const Button = ({ className, ...rest }: Props) => {                                                                                
    return (                                                                                                                                
      <button                                                                                                                               
        {...rest}      
        className={cn(
          "inline-flex items-center justify-center gap-2 px-7 py-3.5 font-secondary border-4 border-ink rounded-lg cursor-pointer tracking-[1.5px]",                                                                                                                        
          "shadow-[4px_4px_0px_var(--ink)]",
          "transition duration-100",                                                                                 
          "hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-lg",
          "active:translate-x-0.5 active:translate-y-0.5 active:shadow-xs",                                           
          className                                                                                                                         
        )}                                                                                                                                  
      />                                                                                                                                    
    );                                                      
  };