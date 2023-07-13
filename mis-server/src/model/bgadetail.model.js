module.exports = (sequelize, Sequelize) => {
    const TableName = `bga_details`;
    const BgaDetails = sequelize.define(
        TableName,
        {
            BGAID: {
                type: Sequelize.BIGINT,
                primaryKey: true,
            },
            Niagoscrub: {
                type: Sequelize.STRING,
            },
            Examordering: {
                type: Sequelize.STRING,
            },
            Doctyping: {
                type: Sequelize.STRING,
            },
            Apsscrubbing: {
                type: Sequelize.STRING,
            },
            Carrierscrub: {
                type: Sequelize.STRING,
            },

            Submission: {
                type: Sequelize.STRING,
            },
            CreatedAt: {
                type: Sequelize.STRING,
            },
            UpdatedAt: {
                type: Sequelize.STRING,
            },
            CreatedBy: {
                type: Sequelize.BIGINT,
            },
            UpdatedBy: {
                type: Sequelize.BIGINT,
            },
            DataEntry: {
                type: Sequelize.BIGINT,
            },
            ClientID:{
                type:Sequelize.BIGINT
            },
        },
        {
            timestamps: false,
            freezeTableName: true,
        }
    );
    BgaDetails.removeAttribute("id");
    return BgaDetails;
};
