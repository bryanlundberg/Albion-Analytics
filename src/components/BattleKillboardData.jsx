

export default function BattleKillboardData({ guild, alliance, kills, deaths, fame, ip }) {
  return (
    <tr>
      <td>{guild}</td>
      <td>{alliance}</td>
      <td>{kills}</td>
      <td>{deaths}</td>
      <td>{fame}</td>
      <td>{ip}</td>
    </tr>
  )
}