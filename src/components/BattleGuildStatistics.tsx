import calAvgIp from "@/functions/calAvgIp";
import BattleKillBoardData from "./BattleKillBoardData";

export default async function BattleGuildStatistics({
  battle,
  players,
}: {
  battle: Battle;
  players: BattlePlayer[];
}) {
  const renderGuilds = Object.values(battle.guilds).map(
    (guild: BattleGuild) => {
      const playerSameGuildWithIp = players.filter(
        (player) => player.guildId === guild.id && player.averageItemPower !== 0
      );
      const playersSameGuild = players.filter(
        (player) => player.guildId === guild.id
      );
      return (
        <BattleKillBoardData
          key={guild.id}
          guild={guild.name}
          alliance={guild.alliance}
          members={playersSameGuild.length}
          kills={guild.kills}
          deaths={guild.deaths}
          fame={guild.killFame}
          ip={calAvgIp(playerSameGuildWithIp, "averageItemPower")}
        />
      );
    }
  );

  return (
    <>
      <p className="font-semibold mb-5">GUILD STATISTICS</p>
      <table className="w-full text-center">
        <thead className="text-sm">
          <tr>
            <th className="text-start">Guild</th>
            <th className="hidden sm:block">Alliance</th>
            <th>Members</th>
            <th>Kills</th>
            <th>Deaths</th>
            <th className="hidden sm:block">Fame</th>
            <th>Avg IP</th>
          </tr>
        </thead>
        <tbody>{renderGuilds}</tbody>
      </table>
    </>
  );
}
