import { SettingsDark } from "../Button";
import LifeHolder from "../Lives";


export default function Base(){
        return(
                <div className = "base">
                       
                        <LifeHolder></LifeHolder>
                        <SettingsDark/>
                        <img className = "lumberjack" src = "/lumberjack1.svg"/>
                        <img className="startTree" src = "/OldGrowth_Stage1.svg"/> 
                </div>
         )
}