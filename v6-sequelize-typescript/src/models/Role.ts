import {
  Table,
  Column,
  Model,
  DataType,
  BelongsTo,
} from "sequelize-typescript";
import User from "./User";

// use an Enum to limit the possible Roles
enum UserRoleEnum {
  Unverified = "unverified",
  Trainee = "trainee",
  Volunteer = "volunteer",
  Admin = "admin",
}

@Table({
  timestamps: false,
  tableName: "roles",
  modelName: "Role",
})
class Role extends Model {
  @Column({
    primaryKey: true,
    type: DataType.INTEGER,
    autoIncrement: true,
    allowNull: false,
  })
  declare id: number;

  @Column({
    // use the Enum here
    type: DataType.ENUM(...Object.values(UserRoleEnum)),
    allowNull: false,
    defaultValue: "unverified",
  })
  declare name: string;

  @Column({
    type: DataType.UUID,
  })
  declare userId: string;

  @BelongsTo(() => User, {
    foreignKey: "userId",
  })
  declare user: User;
}

export default Role;
