import { Table } from 'reactstrap';
import propTypes from 'prop-types';
import { useEffect, useState } from 'react';
import GuildRosterRow from './GuildRosterRow';
import Pagin from '../cssPages&Components/Pagin';

const GuildRoster = (props) => {
  const { roster, region, realm } = props;
  const [currentPage, setCurrentPage] = useState(1);
  const [playerPerPage] = useState(10);
  const [rosterState, setRosterState] = useState([]);

  useEffect(() => {
    setRosterState(
      roster.filter((elmt) => elmt.character.itemLevelEquipped < 200)
    );
  }, []);

  return (
    <div className="d-flex flex-column align-items-center">
      <Table className="d-flex flex-column collapse" hover borderless>
        <thead>
          <tr className="d-flex" style={{ fontSize: '24px' }}>
            <td className="col-md-4">Player</td>
            <td className="col-md-3">Spec</td>
            <td className="col-md-3">Race</td>
            <td className="col-md-2">I-Level</td>
          </tr>
        </thead>
        <tbody>
          {rosterState
            .sort((a, b) => {
              return (
                b.character.itemLevelEquipped - a.character.itemLevelEquipped
              );
            })
            .filter(
              (elmt, index) =>
                index >= (currentPage - 1) * playerPerPage &&
                index < currentPage * playerPerPage
            )
            .map((player) => (
              <GuildRosterRow
                player={player}
                key={player.character.name}
                region={region}
                realm={realm}
              />
            ))}
        </tbody>
      </Table>
      <Pagin
        page={currentPage}
        playerPerPage={playerPerPage}
        totalPlayers={rosterState.length}
        updatePage={setCurrentPage}
      />
    </div>
  );
};

GuildRoster.defaultProps = {
  roster: [],
  region: '',
  realm: '',
};

GuildRoster.propTypes = {
  roster: propTypes.arrayOf(propTypes.object),
  region: propTypes.string,
  realm: propTypes.string,
};
export default GuildRoster;
