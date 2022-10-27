import { Model, INTEGER, STRING } from 'sequelize';
import db from '.';
// import Matche from './matche';

class Team extends Model {
  id!: number;
  teamName!: string;
}

Team.init({
  id: {
    type: INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
    onDelete: 'SET NULL',
    onUpdate: 'CASCADE',
  },
  teamName: {
    type: STRING,
    allowNull: false,
  },
}, {
  sequelize: db,
  modelName: 'teams',
  timestamps: false,
  underscored: true,
});

// Matche.belongsTo(Team, { foreignKey: 'homeTeam', as: 'teamHome' });
// Matche.belongsTo(Team, { foreignKey: 'awayTeam', as: 'teamAway' });

export default Team;
