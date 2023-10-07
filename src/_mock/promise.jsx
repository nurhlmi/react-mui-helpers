/* eslint-disable no-template-curly-in-string */
const data = '`data/${id}`';
const province = '`province`';
const city = '`city?province_id=${provinceId}`';

const uncontrolled = `const [rows, setRows] = useState();
const [complete, setComplete] = useState(false);

const getProvince = async () => {
   const res = await axios.get(${province});
   return res.data.data;
};

useEffect(() => {
   const mounted = true;
   if (mounted) {
      Promise.all([getProvince()]).then((res) => {
         setRows({
            province: res[0],
         });
         setComplete(true);
      });
   }
   // eslint-disable-next-line react-hooks/exhaustive-deps
}, []);`;

const controlled = `const { type } = {...props};
const { id } = useParams();

const [data, setData] = useState();
const [rows, setRows] = useState();
const [complete, setComplete] = useState(type === 'edit' ? false : true);

const getData = async () => {
   const res = await axios.get(${data});
   return res.data.data;
};
const getProvince = async () => {
   const res = await axios.get(${province});
   return res.data.data;
};
const getCity = async (provinceId) => {
   const res = await axios.get(${city});
   return res.data.data;
};

useEffect(() => {
   const mounted = true;
   if (mounted) {
      Promise.all([type === 'edit' && getData(), getProvince()]).then((res) => {
         const value = res[0];
         //   console.log(value);
         if (type === 'edit') {
            getCity(value.province.id).then((city) => {
               setRows({
                  province: res[1],
                  city,
               });
               setData(value);
               setComplete(true);
            });
         } else {
            setRows({
               province: res[1],
               city: [],
            });
            setComplete(true);
         }
      });
   }
   // eslint-disable-next-line react-hooks/exhaustive-deps
}, []);

const handleChange = (e) => {
   if (e.target.name === "province_id") {
      setData(
         {
            ...data,
            [e.target.name]: e.target.value,
            city_id: "",
         },
         getCity(e.target.value).then((res) => {
            setRows({
               ...rows,
               city: res,
            });
         })
      );
   } else {
      setData({
         ...data,
         [e.target.name]: e.target.value,
      });
   }
   setError({
      ...error,
      [e.target.name]: undefined,
   });
};
`;

export default { uncontrolled, controlled };
