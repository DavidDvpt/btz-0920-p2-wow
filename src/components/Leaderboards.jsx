import React from 'react';
import { Navbar, NavbarText, Table } from 'reactstrap';
import { FaSearch } from 'react-icons/fa';
import { GiEuropeanFlag, GiUsaFlag, GiEarthAsiaOceania } from 'react-icons/gi';
import Axios from 'axios';

const api =
  'https://raider.io/api/v1/raiding/raid-rankings?raid=nyalotha-the-waking-city&difficulty=mythic&region=world';
const apiPlayer =
  '/raider.io/api/mythic-plus/rankings/characters?region=world&season=season-bfa-4-post&class=all&role=tank&page=0';

// Display flag image per region
const displaysFlag = (region) => {
  switch (region) {
    case 'Europe':
      return <GiEuropeanFlag />;
    case 'United States & Oceania':
      return <GiUsaFlag />;
    case 'China':
      return <GiEarthAsiaOceania />;
    case 'Russian':
      return <GiEuropeanFlag />;
    default:
      return 'error';
  }
};

class Leaderboards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    Axios.get(api)
      .then((response) => response.data)
      .then((data) => {
        this.setState({
          firstName: data.raidRankings[0].guild.name,
          firstRegion: data.raidRankings[0].guild.region.name,
          firstRealm: data.raidRankings[0].guild.realm.name,
          secondName: data.raidRankings[1].guild.name,
          secondRegion: data.raidRankings[1].guild.region.name,
          secondRealm: data.raidRankings[1].guild.realm.name,
          thirdName: data.raidRankings[2].guild.name,
          thirdRegion: data.raidRankings[2].guild.region.name,
          thirdRealm: data.raidRankings[2].guild.realm.name,
          fourthName: data.raidRankings[3].guild.name,
          fourthRegion: data.raidRankings[3].guild.region.name,
          fourthRealm: data.raidRankings[3].guild.realm.name,
          fifthName: data.raidRankings[4].guild.name,
          fifthRegion: data.raidRankings[4].guild.region.name,
          fifthRealm: data.raidRankings[4].guild.realm.name,
        });
      });
    Axios.get(`https://cors-anywhere.herokuapp.com${apiPlayer}`)
      .then((response) => response.data)
      .then((data) => {
        this.setState({
          firstPlayerName: data.rankings.rankedCharacters[0].character.name,
          secondPlayerName: data.rankings.rankedCharacters[1].character.name,
          thirdPlayerName: data.rankings.rankedCharacters[2].character.name,
          fourthPlayerName: data.rankings.rankedCharacters[3].character.name,
          fifthPlayerName: data.rankings.rankedCharacters[4].character.name,
          firstPlayerRealm:
            data.rankings.rankedCharacters[0].character.realm.name,
          secondPlayerRealm:
            data.rankings.rankedCharacters[1].character.realm.name,
          thirdPlayerRealm:
            data.rankings.rankedCharacters[2].character.realm.name,
          fourthPlayerRealm:
            data.rankings.rankedCharacters[3].character.realm.name,
          fifthPlayerRealm:
            data.rankings.rankedCharacters[4].character.realm.name,
          firstPlayerRegion:
            data.rankings.rankedCharacters[0].character.region.name,
          secondPlayerRegion:
            data.rankings.rankedCharacters[1].character.region.name,
          thirdPlayerRegion:
            data.rankings.rankedCharacters[2].character.region.name,
          fourthPlayerRegion:
            data.rankings.rankedCharacters[3].character.region.name,
          fifthPlayerRegion:
            data.rankings.rankedCharacters[4].character.region.name,
        });
      });
  }

  render() {
    const {
      firstName,
      secondName,
      thirdName,
      fourthName,
      fifthName,
      firstRegion,
      secondRegion,
      thirdRegion,
      fourthRegion,
      fifthRegion,
      firstRealm,
      secondRealm,
      thirdRealm,
      fourthRealm,
      fifthRealm,
      firstPlayerName,
      secondPlayerName,
      thirdPlayerName,
      fourthPlayerName,
      fifthPlayerName,
      firstPlayerRealm,
      secondPlayerRealm,
      thirdPlayerRealm,
      fourthPlayerRealm,
      fifthPlayerRealm,
      firstPlayerRegion,
      secondPlayerRegion,
      thirdPlayerRegion,
      fourthPlayerRegion,
      fifthPlayerRegion,
    } = this.state;
    return (
      <div>
        <Navbar className="bg-primary">
          <NavbarText href="#" className="h1 font-weight-bold">
            World Of Wildcraft
          </NavbarText>
          <FaSearch className="h2" />
        </Navbar>
        <div className="leaderboard-container container d-flex mt-5 align-items-center">
          <Table className="table-striped mx-5">
            <thead>
              <tr>
                <th className="h2 font-weight-bold col-md-6">
                  Top World Guilds
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-primary">
                <th>{firstName}</th>
                <th>{firstRealm}</th>
                <th>{displaysFlag(firstRegion)}</th>
              </tr>
              <tr>
                <th>{secondName}</th>
                <th>{secondRealm}</th>
                <th>{displaysFlag(secondRegion)}</th>
              </tr>
              <tr>
                <th>{thirdName}</th>
                <th>{thirdRealm}</th>
                <th>{displaysFlag(thirdRegion)}</th>
              </tr>
              <tr>
                <th>{fourthName}</th>
                <th>{fourthRealm}</th>
                <th>{displaysFlag(fourthRegion)}</th>
              </tr>
              <tr>
                <th>{fifthName}</th>
                <th>{fifthRealm}</th>
                <th>{displaysFlag(fifthRegion)}</th>
              </tr>
            </tbody>
          </Table>
          <Table className="table-striped mx-5">
            <thead>
              <tr>
                <th className="h2 font-weight-bold">Top World Players</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-primary">
                <th>{firstPlayerName}</th>
                <th>{firstPlayerRealm}</th>
                <th>{displaysFlag(firstPlayerRegion)}</th>
              </tr>
              <tr>
                <th>{secondPlayerName}</th>
                <th>{secondPlayerRealm}</th>
                <th>{displaysFlag(secondPlayerRegion)}</th>
              </tr>
              <tr>
                <th>{thirdPlayerName}</th>
                <th>{thirdPlayerRealm}</th>
                <th>{displaysFlag(thirdPlayerRegion)}</th>
              </tr>
              <tr>
                <th>{fourthPlayerName}</th>
                <th>{fourthPlayerRealm}</th>
                <th>{displaysFlag(fourthPlayerRegion)}</th>
              </tr>
              <tr>
                <th>{fifthPlayerName}</th>
                <th>{fifthPlayerRealm}</th>
                <th>{displaysFlag(fifthPlayerRegion)}</th>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    );
  }
}

export default Leaderboards;
