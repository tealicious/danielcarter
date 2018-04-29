import payments from "@/payments";

export const objectValsToString = o => {
  Object.keys(o).forEach(k => {
    if (typeof o[k] === "object") {
      return toString(o[k]);
    }
    o[k] = "" + o[k];
  });
  return o;
};

export const fireBaseUrl = "https://persisted-data-table.firebaseio.com/";

export const arrayToObject = array =>
  array.reduce((obj, item) => {
    obj[item.id] = item;
    return obj;
  }, {});

export const originalOrder = payments.map(payment => {
  return payment.ID;
});

export const forceOrder = table => {
  return table.map(row => {
    return {
      ID: row.ID,
      Name: row.Name,
      Description: row.Description,
      Date: row["Date"],
      Amount: row.Amount,
      Edit: false
    };
  });
};

export const setOrder = (rows, originalOrder) => {
  const orderedRows = [];
  originalOrder.map(originID => {
    rows.map(row => {
      if (row.ID == originID) {
        orderedRows.push(row);
      }
    });
  });
  return orderedRows;
};
