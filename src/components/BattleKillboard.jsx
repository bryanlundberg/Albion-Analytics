import BattleKillboardData from "./BattleKillboardData";
import "../stylesheets/BattleKillboard.css"

export default function BattleKillboard() {
  return (
    <div className="battle-killboard-container">
      <div className="filter"></div>
      <div>GUILD STATISTICS</div>
      <table>
        <thead>
          <tr>
            <th>Guild</th>
            <th>Alliance</th>
            <th>Kills</th>
            <th>Deaths</th>
            <th>Fame</th>
            <th>IP</th>
          </tr>
        </thead>
        <tbody>
          <BattleKillboardData guild='ssshgfdhgfdhgfd' alliance='ssss' kills='34' deaths='3' fame='434333' ip='988'/>
          <BattleKillboardData guild='ssshgfdhgfdhgfd' alliance='ssss' kills='34' deaths='3' fame='434333' ip='988'/>
          <BattleKillboardData guild='ssshgfdhgfdhgfd' alliance='ssss' kills='34' deaths='3' fame='434333' ip='988'/>
          <BattleKillboardData guild='ssshgfdhgfdhgfd' alliance='ssss' kills='34' deaths='3' fame='434333' ip='988'/>
          <BattleKillboardData guild='ssshgfdhgfdhgfd' alliance='ssss' kills='34' deaths='3' fame='434333' ip='988'/>
          <BattleKillboardData guild='ssshgfdhgfdhgfd' alliance='ssss' kills='34' deaths='3' fame='434333' ip='988'/>
        </tbody>
      </table>
    </div>
  )
}