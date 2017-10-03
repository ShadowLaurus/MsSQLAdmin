using System.Xml;

namespace PoorMansTSqlFormatterRedux.Interfaces
{
    interface IParseTree
    {
        XmlDocument ToXmlDoc();
    }
}
